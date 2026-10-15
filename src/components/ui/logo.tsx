import mascot from '@/assets/mascot.webp';
export function Logo({className='',showWordmark=true}:{className?:string,showWordmark?:boolean}){return <span className={'brand '+className}><img src={mascot} alt="Painters.tv mascot" width="66" height="66"/>{showWordmark&&<span><b>PAINTERS<span>.TV</span></b><small>COLOUR. CRAFT. CHARACTER.</small></span>}</span>}
