
type Props = {
    size?:number;
    color?:string;
}

const ArrowUpRight = ({size=16, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 1.5H11.5M11.5 1.5V11.5M11.5 1.5L1.5 11.5" stroke={color?color:"white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default ArrowUpRight