
type Props = {
    size?:number;
    color?:string;
}

const Twitter = ({size=20, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 30 30" fill={color?color:"none"} xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_970_4738)">
<path d="M4.6521 0.180664C2.34499 0.180664 0.469238 2.06814 0.469238 4.38966V25.4347C0.469238 27.7562 2.34499 29.6437 4.6521 29.6437H25.5664C27.8735 29.6437 29.7492 27.7562 29.7492 25.4347V4.38966C29.7492 2.06814 27.8735 0.180664 25.5664 0.180664H4.6521ZM24.0697 5.70498L17.2856 13.5048L25.2657 24.1194H19.0176L14.1289 17.6809L8.52777 24.1194H5.42331L12.678 15.7737L5.02463 5.70498H11.4296L15.8543 11.591L20.9652 5.70498H24.0697ZM21.5992 22.2516L10.495 7.47407H8.64542L19.8738 22.2516H21.5927H21.5992Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_970_4738">
<rect width="29.28" height="33.672" fill="white" transform="translate(0.469727 -1.92383)"/>
</clipPath>
</defs>
</svg>
  )
}

export default Twitter