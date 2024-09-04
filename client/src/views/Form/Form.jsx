import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../redux/actions";
import f from "./Form.module.css";

const Form = () => {
  const [form, setForm] = useState({
    name: "", // Cambiado a 'name' en lugar de 'title'
    summary: "",
    score: "",
    healthScore: "",
    diets: [],
    stepByStep: "",
  });

  const [image, setImage] = useState(null); // Estado separado para la imagen

  const diets = useSelector((state) => state.diets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const changeHandler = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [property]: value });
  };

  const handleChecked = (e) => {
    if (e.target.checked) {
      setForm({
        ...form,
        diets: [...form.diets, e.target.name], // Asegúrate de que diets es un array
      });
    } else {
      setForm({
        ...form,
        diets: form.diets.filter((diet) => e.target.name !== diet), // Filtra correctamente
      });
    }
  };

  // Manejar la carga de la imagen
  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Guardar el archivo seleccionado en el estado
  };

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData(); // Crear un nuevo FormData

  //   // Agregar todos los campos del formulario a formData
  //   formData.append("name", form.name); // Cambiado a 'name'
  //   formData.append("summary", form.summary);
  //   formData.append("healthScore", form.healthScore);
  //   formData.append("diets", JSON.stringify(form.diets)); // Enviar como JSON string
  //   formData.append("stepByStep", form.stepByStep);
  //   if (image) {
  //     formData.append("image", image);
  //   }

  //   console.log("Datos enviados:", {
  //     name: form.name, // Verificar que 'name' tenga un valor
  //     summary: form.summary,
  //     healthScore: form.healthScore,
  //     diets: form.diets, // Verifica qué datos se están enviando
  //     stepByStep: form.stepByStep,
  //     image: image ? image.name : null,
  //   });

  //   // Enviar formData al backend
  //   try {
  //     const res = await axios.post("http://localhost:3001/recipes", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     alert("Receta creada con éxito!");
  //   } catch (err) {
  //     console.error("Error al crear la receta:", err.response.data);
  //   }
  // };
// const submitHandler = async (e) => {
//   e.preventDefault();

  
//   const formData = new FormData(); // Crear un nuevo FormData
  
//   console.log("Datos que se enviarán:", formData);
  
//   // Agregar todos los campos del formulario a formData
//   formData.append("name", form.name);
//   formData.append("summary", form.summary);
//   formData.append("healthScore", form.healthScore);
//   formData.append("stepByStep", form.stepByStep);
//   if (image) {
//     formData.append("image", image); // Agregar la imagen a formData
//   }

//   // Asegúrate de enviar las dietas como un JSON stringified array
//   formData.append("dietTypes", JSON.stringify(form.diets)); // Cambia "diets" a "dietTypes"

//   // Enviar formData al backend
//   try {
//     const res = await axios.post("http://localhost:3001/recipes", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     alert("Receta creada con éxito!");
//   } catch (err) {
//     alert("Error al crear la receta:", err.response.data.message);
//   }
// };


const submitHandler = async (e) => {
  e.preventDefault();

  const formData = new FormData(); // Crear un nuevo FormData

  // Agregar todos los campos del formulario a formData
  formData.append("name", form.name);
  formData.append("summary", form.summary);
  formData.append("healthScore", form.healthScore);
  formData.append("stepByStep", form.stepByStep);
  if (image) {
    formData.append("image", image); // Agregar la imagen a formData
  }

  // Asegúrate de enviar las dietas como un JSON stringified array
  formData.append("dietTypes", JSON.stringify(form.diets)); // Cambia "diets" a "dietTypes"

  // Enviar formData al backend
  try {
    const res = await axios.post("http://localhost:3001/recipes", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Verifica que este encabezado esté correcto
      },
    });
    alert("Receta creada con éxito!");
  } catch (err) {
    alert("Error al crear la receta:", err.response.data.message);
  }
};



  return (
    <form className={f.container} onSubmit={submitHandler}>
      <h2>Crea tu receta</h2>
      <div className={f.column}>
        <div className={f.left}>
          <div className={f.name}>
            <label>
              Nombre del Plato:
              <input
                type="text"
                name="name" // Cambiado a 'name'
                value={form.name}
                onChange={changeHandler}
              />
            </label>
          </div>

          <div>
            <label>
              Resumen del Plato:
              <textarea
                type="text"
                name="summary"
                value={form.summary}
                onChange={changeHandler}
              />
            </label>
          </div>

          <div>
            <label>
              Puntaje de Salud:
              <input
                type="range"
                min="0"
                max="100"
                name="healthScore"
                value={form.healthScore}
                onChange={changeHandler}
              />
            </label>
          </div>

          <div>
            <label>
              Paso a paso:
              <textarea
                type="text"
                name="stepByStep"
                value={form.stepByStep}
                onChange={changeHandler}
              />
            </label>
          </div>

          <div>
            <label>
              Imagen del plato:
              <input type="file" onChange={handleImageChange} />
            </label>
          </div>
        </div>

        <div className={f.right}>
          <div className={f.container}>
            <div>
              <h4>Tipos de Dieta:</h4>
              <div className={f.diets}>
                {diets.length > 0 &&
                  diets.map((e) => (
                    <label key={e}>
                      <input
                        type="checkbox"
                        key={e}
                        name={e}
                        onChange={handleChecked}
                        value={form.diets}
                      />
                      {e}
                    </label>
                  ))}
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
      <button type="submit">CREAR RECETA</button>
    </form>
  );
};

export default Form;
