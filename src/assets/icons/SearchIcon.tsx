
type Props = {
    size?:number;
    color?:string;
}

const SearchIcon = ({size=18, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.25 17.7502L13.3083 13.8085M15.4167 8.58333C15.4167 12.6334 12.1334 15.9167 8.08333 15.9167C4.03324 15.9167 0.75 12.6334 0.75 8.58333C0.75 4.53324 4.03324 1.25 8.08333 1.25C12.1334 1.25 15.4167 4.53324 15.4167 8.58333Z" stroke={color?color:"#EFE8E8"} stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default SearchIcon