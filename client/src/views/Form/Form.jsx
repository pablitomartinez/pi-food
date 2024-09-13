import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../redux/actions";
import f from "./Form.module.css";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    summary: "",
    healthScore: 50, // Valor inicial en el centro
    diets: [],
    stepByStep: "",
  });

  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null); // Estado para la vista previa de la imagen
  const [errors, setErrors] = useState({}); // Estado para errores de validación

  const diets = useSelector((state) => state.diets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Validación en tiempo real
    if (name === "name" && value.length < 5) {
      setErrors({
        ...errors,
        name: "El nombre debe tener al menos 5 caracteres",
      });
    } else {
      setErrors({ ...errors, name: "" });
    }
  };

  const handleChecked = (e) => {
    if (e.target.checked) {
      setForm({ ...form, diets: [...form.diets, e.target.name] });
    } else {
      setForm({
        ...form,
        diets: form.diets.filter((diet) => e.target.name !== diet),
      });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Vista previa de la imagen
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("summary", form.summary);
    formData.append("healthScore", form.healthScore);
    formData.append("stepByStep", form.stepByStep);
    if (image) {
      formData.append("image", image);
    }
    formData.append("dietTypes", JSON.stringify(form.diets));

    try {
      const res = await axios.post("http://localhost:3001/recipes", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Receta creada con éxito!");
    } catch (err) {
      alert("Error al crear la receta:", err.response.data.message);
    }
  };

  return (
    // <form className={f.container} onSubmit={submitHandler}>
    //   <h2>Crea tu receta</h2>

    //   {/* Primera columna */}
    //   <div className="column">
    //     {/* Sección de Información Básica */}
    //     <div className={f.section}>
    //       <h3>Información Básica</h3>
    //       <div className={f.inputGroup}>
    //         <label>Nombre del Plato:</label>
    //         <input
    //           type="text"
    //           name="name"
    //           value={form.name}
    //           onChange={changeHandler}
    //           className={errors.name ? f.errorInput : ""}
    //         />
    //         {errors.name && <p className={f.error}>{errors.name}</p>}
    //       </div>

    //       <div className={f.inputGroup}>
    //         <label>Resumen del Plato:</label>
    //         <textarea
    //           name="summary"
    //           value={form.summary}
    //           onChange={changeHandler}
    //         />
    //       </div>
    //     </div>

    //     {/* Sección de Detalles de Salud y Preparación */}
    //     <div className={f.section}>
    //       <h3>Detalles de Preparación</h3>
    //       <div className={f.inputGroup}>
    //         <label>Puntaje de Salud:</label>
    //         <input
    //           type="range"
    //           min="0"
    //           max="100"
    //           name="healthScore"
    //           value={form.healthScore}
    //           onChange={changeHandler}
    //         />
    //         <span>{form.healthScore}</span>
    //       </div>

    //       <div className={f.inputGroup}>
    //         <label>Paso a paso:</label>
    //         <textarea
    //           name="stepByStep"
    //           value={form.stepByStep}
    //           onChange={changeHandler}
    //         />
    //       </div>
    //     </div>

    //     {/* Sección de Imagen */}
    //     <div className={f.section}>
    //       <h3>Imagen del Plato</h3>
    //       <input type="file" onChange={handleImageChange} />
    //       {previewImage && (
    //         <img src={previewImage} alt="Preview" className={f.preview} />
    //       )}
    //     </div>
    //   </div>

    //   {/* Segunda columna */}
    //   <div className="column">
    //     {/* Sección de Tipos de Dieta */}
    //     <div className={f.section}>
    //       <h3>Tipos de Dieta</h3>
    //       <div className={f.diets}>
    //         {diets.length > 0 &&
    //           diets.map((diet) => (
    //             <label key={diet}>
    //               <input
    //                 type="checkbox"
    //                 name={diet}
    //                 onChange={handleChecked}
    //                 checked={form.diets.includes(diet)}
    //               />
    //               {diet}
    //             </label>
    //           ))}
    //       </div>
    //     </div>
    //   </div>

    //   {/* Botón de Envío */}
    //   <button type="submit" className={f.submitButton}>
    //     CREAR RECETA
    //   </button>
    // </form>
    // <form className={f.container} onSubmit={submitHandler}>
    //   <h2>Crea tu receta</h2>

    //   {/* Primera columna con la información básica */}
    //   <div className="column">
    //     {/* Sección de Información Básica */}
    //     <div className={f.section}>
    //       <h3>Información Básica</h3>
    //       <div className={f.inputGroup}>
    //         <label>Nombre del Plato:</label>
    //         <input
    //           type="text"
    //           name="name"
    //           value={form.name}
    //           onChange={changeHandler}
    //           className={errors.name ? f.errorInput : ""}
    //         />
    //         {errors.name && <p className={f.error}>{errors.name}</p>}
    //       </div>

    //       <div className={f.inputGroup}>
    //         <label>Resumen del Plato:</label>
    //         <textarea
    //           name="summary"
    //           value={form.summary}
    //           onChange={changeHandler}
    //         />
    //       </div>
    //     </div>

    //     {/* Sección de Detalles de Salud y Preparación */}
    //     <div className={f.section}>
    //       <h3>Detalles de Preparación</h3>
    //       <div className={f.inputGroup}>
    //         <label>Puntaje de Salud:</label>
    //         <input
    //           type="range"
    //           min="0"
    //           max="100"
    //           name="healthScore"
    //           value={form.healthScore}
    //           onChange={changeHandler}
    //         />
    //         <span>{form.healthScore}</span>
    //       </div>

    //       <div className={f.inputGroup}>
    //         <label>Paso a paso:</label>
    //         <textarea
    //           name="stepByStep"
    //           value={form.stepByStep}
    //           onChange={changeHandler}
    //         />
    //       </div>
    //     </div>

    //     {/* Sección de Imagen */}
    //     <div className={f.section}>
    //       <h3>Imagen del Plato</h3>
    //       <input type="file" onChange={handleImageChange} />
    //       {previewImage && (
    //         <img src={previewImage} alt="Preview" className={f.preview} />
    //       )}
    //     </div>
    //   </div>

    //   {/* Segunda columna con Tipos de Dieta */}
    //   <div className="column">
    //     <div className={f.section}>
    //       <h3>Tipos de Dieta</h3>
    //       <div className={f.diets}>
    //         {diets.length > 0 &&
    //           diets.map((diet) => (
    //             <label key={diet}>
    //               <input
    //                 type="checkbox"
    //                 name={diet}
    //                 onChange={handleChecked}
    //                 checked={form.diets.includes(diet)}
    //               />
    //               {diet}
    //             </label>
    //           ))}
    //       </div>
    //     </div>
    //   </div>

    //   {/* Botón de Envío centrado */}
    //   <button type="submit" className={f.submitButton}>
    //     CREAR RECETA
    //   </button>
    // </form>
    // <>
    //   <h2>Crea tu receta</h2>
    // <form className={f.container} onSubmit={submitHandler}>

    //   {/* Columna izquierda: Información Básica y Detalles de Preparación */}
    //   <div className="column">
    //     {/* Sección de Información Básica */}
    //     <div className={f.section}>
    //       <h3>Información Básica</h3>
    //       <div className={f.inputGroup}>
    //         <label>Nombre del Plato:</label>
    //         <input
    //           type="text"
    //           name="name"
    //           value={form.name}
    //           onChange={changeHandler}
    //           className={errors.name ? f.errorInput : ""}
    //         />
    //         {errors.name && <p className={f.error}>{errors.name}</p>}
    //       </div>

    //       <div className={f.inputGroup}>
    //         <label>Resumen del Plato:</label>
    //         <textarea
    //           name="summary"
    //           value={form.summary}
    //           onChange={changeHandler}
    //         />
    //       </div>
    //     </div>

    //     {/* Sección de Detalles de Preparación */}
    //     <div className={f.section}>
    //       <h3>Detalles de Preparación</h3>
    //       <div className={f.inputGroup}>
    //         <label>Puntaje de Salud:</label>
    //         <input
    //           type="range"
    //           min="0"
    //           max="100"
    //           name="healthScore"
    //           value={form.healthScore}
    //           onChange={changeHandler}
    //         />
    //         <span>{form.healthScore}</span>
    //       </div>

    //       <div className={f.inputGroup}>
    //         <label>Paso a paso:</label>
    //         <textarea
    //           name="stepByStep"
    //           value={form.stepByStep}
    //           onChange={changeHandler}
    //         />
    //       </div>
    //     </div>

    //     {/* Sección de Imagen */}
    //     <div className={f.section}>
    //       <h3>Imagen del Plato</h3>
    //       <input type="file" onChange={handleImageChange} />
    //       {previewImage && (
    //         <img src={previewImage} alt="Preview" className={f.preview} />
    //       )}
    //     </div>
    //   </div>

    //   {/* Columna derecha: Tipos de Dieta */}
    //   <div className="column">
    //     <div className={f.section}>
    //       <h3>Tipos de Dieta</h3>
    //       <div className={f.diets}>
    //         {diets.length > 0 &&
    //           diets.map((diet) => (
    //             <label key={diet}>
    //               <input
    //                 type="checkbox"
    //                 name={diet}
    //                 onChange={handleChecked}
    //                 checked={form.diets.includes(diet)}
    //               />
    //               {diet}
    //             </label>
    //           ))}
    //       </div>
    //     </div>
    //   </div>

    //   {/* Botón de Envío centrado */}
    //   <button type="submit" className={f.submitButton}>
    //     CREAR RECETA
    //   </button>
    // </form>
    // </>

    <form className={f.container} onSubmit={submitHandler}>
      <h2>Crea tu receta</h2>

      <div className="form-columns">
        {/* Columna izquierda: Información Básica y Detalles de Preparación */}
        <div className="column">
          {/* Sección de Información Básica */}
          <div className={f.section}>
            <h3>Información Básica</h3>
            <div className={f.inputGroup}>
              <label>Nombre del Plato:</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={changeHandler}
                className={errors.name ? f.errorInput : ""}
              />
              {errors.name && <p className={f.error}>{errors.name}</p>}
            </div>

            <div className={f.inputGroup}>
              <label>Resumen del Plato:</label>
              <textarea
                name="summary"
                value={form.summary}
                onChange={changeHandler}
              />
            </div>
          </div>

          {/* Sección de Detalles de Preparación */}
          <div className={f.section}>
            <h3>Detalles de Preparación</h3>
            <div className={f.inputGroup}>
              <label>Puntaje de Salud:</label>
              <input
                type="range"
                min="0"
                max="100"
                name="healthScore"
                value={form.healthScore}
                onChange={changeHandler}
              />
              <span>{form.healthScore}</span>
            </div>

            <div className={f.inputGroup}>
              <label>Paso a paso:</label>
              <textarea
                name="stepByStep"
                value={form.stepByStep}
                onChange={changeHandler}
              />
            </div>
          </div>

          {/* Sección de Imagen */}
          <div className={f.section}>
            <h3>Imagen del Plato</h3>
            <input type="file" onChange={handleImageChange} />
            {previewImage && (
              <img src={previewImage} alt="Preview" className={f.preview} />
            )}
          </div>
        </div>

        {/* Columna derecha: Tipos de Dieta */}
        <div className="column">
          <div className={f.section}>
            <h3>Tipos de Dieta</h3>
            <div className={f.diets}>
              {diets.length > 0 &&
                diets.map((diet) => (
                  <label key={diet}>
                    <input
                      type="checkbox"
                      name={diet}
                      onChange={handleChecked}
                      checked={form.diets.includes(diet)}
                    />
                    {diet}
                  </label>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Botón de Envío centrado al final del formulario */}
      <button type="submit" className={f.submitButton}>
        CREAR RECETA
      </button>
    </form>
  );
};

export default Form;
