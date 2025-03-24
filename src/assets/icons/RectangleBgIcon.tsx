
type Props = {
    size?:number;
    color?:string;
}

const RectangleBgIcon = ({size=8, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="8" height="8" rx="2" fill={color?color:"#2C6934"}/>
</svg>
  )
}

export default RectangleBgIcon