
type Props = {
    size?:number;
    color?:string;
}

const ReverseArrows = ({size=14, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.6405 3.667H8.9735M8.9735 3.667L6.3065 6.333M8.9735 3.667L6.3065 1M1.6405 10.333H12.3065M12.3065 10.333L9.6405 13M12.3065 10.333L9.6405 7.667" stroke={color?color:"#1A2B3B"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default ReverseArrows