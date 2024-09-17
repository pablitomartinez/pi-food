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

  const validateForm = () => {
    let newErrors = {};

    if (!form.name || form.name.length < 5) {
      newErrors.name = "El nombre debe tener al menos 5 caracteres.";
    }
    if (!form.summary || form.summary.length < 10) {
      newErrors.summary = "El resumen debe tener al menos 10 caracteres.";
    }
    if (!form.stepByStep || form.stepByStep.length < 10) {
      newErrors.stepByStep =
        "El paso a paso debe tener al menos 10 caracteres.";
    }
    if (!image) {
      newErrors.image = "Debes subir una imagen del plato.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Eliminar el error cuando el usuario corrige el campo
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
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

    // Eliminar el error cuando el usuario sube una imagen
    if (errors.image) {
      setErrors({ ...errors, image: "" });
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Si la validación falla, no enviar el formulario

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
    <div className={f.container} onSubmit={submitHandler} >
      <h2>Crea tu receta</h2>

      {/* Contenedor para las dos columnas */}
      <div className={f.formColumns}>
        {/* Columna izquierda: Información Básica y Detalles de Preparación */}
        <div className={f.column}>
          {/* Sección de Información Básica */}
          <div className={f.section}>
            <h3>Información Básica</h3>
            {/* Input del nombre del plato */}
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
            {/* Input del resumen */}
            <div className={f.inputGroup}>
              <label>Resumen del Plato:</label>
              <textarea
                name="summary"
                value={form.summary}
                onChange={changeHandler}
                className={errors.summary ? f.errorInput : ""}
              />
              {errors.summary && <p className={f.error}>{errors.summary}</p>}
            </div>
          </div>

          {/* Sección de Detalles de Preparación */}
          <div className={f.section}>
            <h3>Detalles de Preparación</h3>
            {/* Input del puntaje de salud */}
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
            {/* Input del paso a paso */}
            <div className={f.inputGroup}>
              <label>Paso a paso:</label>
              <textarea
                name="stepByStep"
                value={form.stepByStep}
                onChange={changeHandler}
                className={errors.stepByStep ? f.errorInput : ""}
              />
              {errors.stepByStep && (
                <p className={f.error}>{errors.stepByStep}</p>
              )}
            </div>
          </div>

          {/* Sección de Imagen */}
          <div className={f.section}>
            <h3>Imagen del Plato</h3>
            <input type="file" onChange={handleImageChange} />
            {previewImage && (
              <img src={previewImage} alt="Preview" className={f.preview} />
            )}
            {errors.image && <p className={f.error}>{errors.image}</p>}
          </div>
        </div>

        {/* Columna derecha: Tipos de Dieta */}
        <div className={f.column}>
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
    </div>
  );
};

export default Form;
