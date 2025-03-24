
type Props = {
    size?:number;
    color?:string;
}

const DotIcon = ({size=5, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2.5" cy="2.5" r="2.5" fill={color?color:"#D9D9D9"}/>
</svg>
  )
}

export default DotIcon