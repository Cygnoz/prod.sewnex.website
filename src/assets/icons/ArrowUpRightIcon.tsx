
type Props = {
    size?:number;
    color?:string;
}

const ArrowUpRightIcon = ({size, color}: Props) => {
  return (
<svg width={size}height={size} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.875 1.58333H13.125M13.125 1.58333V12.4167M13.125 1.58333L1.875 12.4167" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
}

export default ArrowUpRightIcon