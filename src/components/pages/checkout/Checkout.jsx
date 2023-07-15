
const Checkout = ({handleSubmit, handleChange}) => {
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="name" 
            placeholder="Nombre" 
            onChange={handleChange}/>
        <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            onChange={handleChange}/>
        <input 
            type="submit" 
            value="Enviar" />
    </form>
  )
}

export default Checkout