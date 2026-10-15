from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import json,xml.etree.ElementTree as ET
root=Path('dist/public');fails=[];rows=[]
class Page(HTMLParser):
 def __init__(self):
  super().__init__();self.h1=0;self.titles=0;self.canon=[];self.images=[];self.links=[];self.main=False;self.hero=False;self.text=[];self.robots='';self.ld=False;self.json=''
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if t=='main':self.main=True
  if t=='h1':self.h1+=1
  if t=='title':self.titles+=1
  if t=='link' and a.get('rel')=='canonical':self.canon.append(a.get('href'))
  if t=='meta' and a.get('name')=='robots':self.robots=a.get('content','')
  if t=='img':
   self.images.append(a.get('src',''))
   if self.main and 'mascot' not in a.get('src',''):self.hero=True
  if t=='a':self.links.append(a.get('href',''))
  if t=='script' and a.get('type')=='application/ld+json':self.ld=True;self.json=''
 def handle_data(self,d):
  if self.main:self.text.append(d)
  if self.ld:self.json+=d
 def handle_endtag(self,t):
  if t=='main':self.main=False
  if t=='script' and self.ld:json.loads(self.json);self.ld=False
for f in sorted(root.rglob('index.html')):
 route='/'+str(f.parent.relative_to(root));route='/' if route=='/.' else route
 p=Page();s=f.read_text();p.feed(s);errors=[]
 if p.h1!=1:errors.append('h1 count '+str(p.h1))
 if p.titles!=1:errors.append('title count '+str(p.titles))
 if p.canon!=['https://painters.tv'+route]:errors.append('canonical '+str(p.canon))
 if not p.hero:errors.append('missing subject visual')
 if len(' '.join(p.text))<250:errors.append('empty main')
 if route.startswith('/city/') and 'noindex' not in p.robots:errors.append('unfinished city indexed')
 for src in p.images:
  if src.startswith('/') and not (root/src.lstrip('/')).is_file():errors.append('missing image '+src)
 for href in p.links:
  u=urlsplit(href)
  if not u.scheme and u.path.startswith('/'):
   target=root/unquote(u.path.lstrip('/'))
   if not target.is_file() and not (target/'index.html').is_file():errors.append('broken internal '+href)
 if 'built on Replit' in s or 'buildershaus.com/build"' in s:errors.append('placeholder/broken network link')
 if errors:fails.append({'route':route,'errors':errors})
 rows.append({'route':route,'passed':not errors,'robots':p.robots,'images':len(p.images)})
sitemap=[e.text for e in ET.parse(root/'sitemap.xml').findall('{*}url/{*}loc')]
result={'html_routes':len(rows),'sitemap_urls':len(sitemap),'failures':fails,'routes':rows}
Path('release-checks.json').write_text(json.dumps(result,indent=2))
print(json.dumps({k:v for k,v in result.items() if k!='routes'},indent=2));assert not fails
