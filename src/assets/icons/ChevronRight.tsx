
type Props = {
    size?:number;
    color?:string;
}

const ChevronRight = ({size=14, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25 10.5L5.75 6L1.25 1.5" stroke={color?color:"#4B5C79"} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default ChevronRight