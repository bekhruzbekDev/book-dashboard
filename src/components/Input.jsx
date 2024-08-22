import PropTypes from "prop-types"
const Input = ({inputInfo,validation}) => {
    const {label,type,} =inputInfo
    const {register,name ,obj,errors} =validation
    
  return (
    <div className="flex flex-col ">
       <label htmlFor="" className="text-white mb-1">{label}</label>
       
        <input
          type={type}
          placeholder={label}
          className={`p-2 bg-transparent border border-white  text-white outline-none rounded-md mb-4 w-full ${errors[name] ? "border-red-500":""}`}
          {...register(name,obj)}
        />
    </div>
  )
}
Input.propTypes ={
    inputInfo:PropTypes.object,
    validation:PropTypes.object
}
export default Input
