import { Button, TextField } from "@mui/material"
import './Checkout.css';

const Checkout = ({data}) => {
  let {handleSubmit, handleChange, handleBlur, touched, values, errors, isSubmitting, orderID} = data;
  return (
    <>
    {orderID ? (
        <div>
          <p>compra finalizada, disfrute</p>
        </div>
      ) : (
        <div className="form-container">
        <form onSubmit={handleSubmit}>
          <TextField  
            type="text"
            label="Nombre" 
            variant="outlined"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            className="input"
            helperText={errors.name && touched.name && errors.name}
            value={values.name}
            error={errors.name && touched.name ? true : false}
          />
          <TextField  
            type="text"
            label="Email" 
            variant="outlined"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            className="input"
            helperText={errors.email && touched.email && errors.email}
            value={values.email}
            error={errors.email && touched.email ? true : false}
          />
          <TextField  
            type="number"
            label="phone" 
            variant="outlined"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            className="input"
            helperText={errors.phone && touched.phone && errors.phone}
            value={values.phone}
            error={errors.phone && touched.phone ? true : false}
          />
          <Button disabled={isSubmitting} type="submit" variant="contained" sx={{maxWidth: '200px'}}>Finalizar compra</Button>
        </form>
      </div>
      )
    }
    </>
  )
}

export default Checkout