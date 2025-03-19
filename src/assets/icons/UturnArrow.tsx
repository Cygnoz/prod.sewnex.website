
type Props = {
    size?:number;
    color?:string;
}

const UturnArrow = ({size=14, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.6405 3.667H8.3065C9.36737 3.667 10.3848 4.08843 11.1349 4.83857C11.8851 5.58872 12.3065 6.60613 12.3065 7.667C12.3065 8.72787 11.8851 9.74528 11.1349 10.4954C10.3848 11.2456 9.36737 11.667 8.3065 11.667H1.6405M1.6405 3.667L4.3065 1M1.6405 3.667L4.3065 6.333" stroke={color?color:"#1A2B3B"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default UturnArrow