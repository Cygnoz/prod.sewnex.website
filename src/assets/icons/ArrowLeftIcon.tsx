

type Props = {
    size?:number;
    color?:string;
}

const ArrowLeftIcon = ({size,color }: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.125 11.5L1.875 11.5M1.875 11.5L11.5 21.125M1.875 11.5L11.5 1.875" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


  )
}

export default ArrowLeftIcon