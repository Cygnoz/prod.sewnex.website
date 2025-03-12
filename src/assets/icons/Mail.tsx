
type Props = {
    size?:number;
    color?:string;
    bg?:string;
}

const Mail = ({size=16, color, bg}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 24 25" fill={bg?bg:"none"} xmlns="http://www.w3.org/2000/svg">
<path d="M22 7.6123L13.03 13.3123C12.7213 13.5057 12.3643 13.6083 12 13.6083C11.6357 13.6083 11.2787 13.5057 10.97 13.3123L2 7.6123M4 4.6123H20C21.1046 4.6123 22 5.50774 22 6.6123V18.6123C22 19.7169 21.1046 20.6123 20 20.6123H4C2.89543 20.6123 2 19.7169 2 18.6123V6.6123C2 5.50774 2.89543 4.6123 4 4.6123Z" stroke={color?color:"#232222"} stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default Mail