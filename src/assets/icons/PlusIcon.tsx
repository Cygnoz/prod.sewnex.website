
type Props = {
    size?:number;
    color?:string;
}

const PlusIcon = ({size }: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="38" height="38" rx="18" fill="#3D2801"/>
<path d="M7.91663 19.0001H30.0833M19 7.91675V30.0834" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



  )
}

export default PlusIcon