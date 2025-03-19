
type Props = {
    size?:number;
    color?:string;
}

const PrinterIcon = ({size=16, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1538_832)">
<path d="M3.99992 5.99992V1.33325H11.9999V5.99992M3.99992 11.9999H2.66659C2.31296 11.9999 1.97382 11.8594 1.72378 11.6094C1.47373 11.3593 1.33325 11.0202 1.33325 10.6666V7.33325C1.33325 6.97963 1.47373 6.64049 1.72378 6.39044C1.97382 6.14039 2.31296 5.99992 2.66659 5.99992H13.3333C13.6869 5.99992 14.026 6.14039 14.2761 6.39044C14.5261 6.64049 14.6666 6.97963 14.6666 7.33325V10.6666C14.6666 11.0202 14.5261 11.3593 14.2761 11.6094C14.026 11.8594 13.6869 11.9999 13.3333 11.9999H11.9999M3.99992 9.33325H11.9999V14.6666H3.99992V9.33325Z" stroke={color?color:"white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1538_832">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
  )
}

export default PrinterIcon