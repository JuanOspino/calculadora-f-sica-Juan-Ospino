document.addEventListener("DOMContentLoaded", function () {
    const formulaSelect = document.getElementById("formula");
    const inputsDiv = document.getElementById("inputs");
    const resultadoDiv = document.getElementById("resultado");

    formulaSelect.addEventListener("change", generarInputs);

    function generarInputs() {
        inputsDiv.innerHTML = "";
        const formula = formulaSelect.value;
        let inputsHTML = "";

        switch (formula) {
            case "v":
                inputsHTML = `<label for="distancia">Distancia (d en m):</label>
                    <input type="number" id="distancia">
                    <label for="tiempo">Tiempo (t en s):</label>
                    <input type="number" id="tiempo">`;
                break;
            case "a":
                inputsHTML = `<label for="deltaV">Cambio de velocidad (Δv en m/s):</label>
                    <input type="number" id="deltaV">
                    <label for="deltaT">Cambio de tiempo (Δt en s):</label>
                    <input type="number" id="deltaT">`;
                break;
            case "fuerza":
                inputsHTML = `<label for="masa">Masa (m en kg):</label>
                    <input type="number" id="masa">
                    <label for="aceleracion">Aceleración (a en m/s²):</label>
                    <input type="number" id="aceleracion">`;
                break;
            case "trabajo":
                inputsHTML = `<label for="fuerza">Fuerza (F en N):</label>
                    <input type="number" id="fuerza">
                    <label for="distancia">Distancia (d en m):</label>
                    <input type="number" id="distancia">
                    <label for="angulo">Ángulo (θ en grados):</label>
                    <input type="number" id="angulo">`;
                break;
            case "energiaCin":
                inputsHTML = `<label for="masa">Masa (m en kg):</label>
                    <input type="number" id="masa">
                    <label for="velocidad">Velocidad (v en m/s):</label>
                    <input type="number" id="velocidad">`;
                break;
            case "energiaPot":
                inputsHTML = `<label for="masa">Masa (m en kg):</label>
                    <input type="number" id="masa">
                    <label for="gravedad">Gravedad (g en m/s²):</label>
                    <input type="number" id="gravedad">
                    <label for="altura">Altura (h en m):</label>
                    <input type="number" id="altura">`;
                break;
            case "densidad":
                inputsHTML = `<label for="masa">Masa (m en kg):</label>
                    <input type="number" id="masa">
                    <label for="volumen">Volumen (V en m³):</label>
                    <input type="number" id="volumen">`;
                break;
            case "presion":
                inputsHTML = `<label for="fuerza">Fuerza (F en N):</label>
                    <input type="number" id="fuerza">
                    <label for="area">Área (A en m²):</label>
                    <input type="number" id="area">`;
                break;
            case "carga":
                inputsHTML = `<label for="corriente">Corriente (I en A):</label>
                    <input type="number" id="corriente">
                    <label for="tiempo">Tiempo (t en s):</label>
                    <input type="number" id="tiempo">`;
                break;
            case "ohm":
                inputsHTML = `<label for="corriente">Corriente (I en A):</label>
                    <input type="number" id="corriente">
                    <label for="resistencia">Resistencia (R en Ω):</label>
                    <input type="number" id="resistencia">`;
                break;
        }

        inputsDiv.innerHTML = inputsHTML;
    }

    window.calcular = function () {
        const formula = formulaSelect.value;
        let resultado = "";

        function obtenerValor(id) {
            const valor = parseFloat(document.getElementById(id)?.value);
            return isNaN(valor) ? null : valor;
        }

        switch (formula) {
            case "v":
                const d = obtenerValor("distancia");
                const t = obtenerValor("tiempo");
                resultado = d && t && t !== 0 ? `Velocidad = ${(d / t).toFixed(2)} m/s` : "Error en datos";
                break;
            case "a":
                const deltaV = obtenerValor("deltaV");
                const deltaT = obtenerValor("deltaT");
                resultado = deltaV && deltaT && deltaT !== 0 ? `Aceleración = ${(deltaV / deltaT).toFixed(2)} m/s²` : "Error en datos";
                break;
            case "fuerza":
                const m = obtenerValor("masa");
                const a = obtenerValor("aceleracion");
                resultado = m && a ? `Fuerza = ${(m * a).toFixed(2)} N` : "Error en datos";
                break;
            case "trabajo":
                const F = obtenerValor("fuerza");
                const dTrabajo = obtenerValor("distancia");
                const theta = obtenerValor("angulo");
                resultado = F && dTrabajo && theta ? `Trabajo = ${(F * dTrabajo * Math.cos(theta * Math.PI / 180)).toFixed(2)} J` : "Error en datos";
                break;
            case "energiaCin":
                const mCin = obtenerValor("masa");
                const vCin = obtenerValor("velocidad");
                resultado = mCin && vCin ? `Energía Cinética = ${(0.5 * mCin * vCin ** 2).toFixed(2)} J` : "Error en datos";
                break;
            case "energiaPot":
                const mPot = obtenerValor("masa");
                const gPot = obtenerValor("gravedad");
                const hPot = obtenerValor("altura");
                resultado = mPot && gPot && hPot ? `Energía Potencial = ${(mPot * gPot * hPot).toFixed(2)} J` : "Error en datos";
                break;
            case "densidad":
                const mDen = obtenerValor("masa");
                const VDen = obtenerValor("volumen");
                resultado = mDen && VDen ? `Densidad = ${(mDen / VDen).toFixed(2)} kg/m³` : "Error en datos";
                break;
            case "presion":
                const FPres = obtenerValor("fuerza");
                const APres = obtenerValor("area");
                resultado = FPres && APres ? `Presión = ${(FPres / APres).toFixed(2)} Pa` : "Error en datos";
                break;
            case "carga":
                const ICarga = obtenerValor("corriente");
                const TCarga = obtenerValor("tiempo");
                resultado = ICarga && TCarga ? `Carga = ${(ICarga * TCarga).toFixed(2)} C` : "Error en datos";
                break;
            case "ohm":
                const IOhm = obtenerValor("corriente");
                const ROhm = obtenerValor("resistencia");
                resultado = IOhm && ROhm ? `Voltaje = ${(IOhm * ROhm).toFixed(2)} V` : "Error en datos";
                break;
        }

        resultadoDiv.innerHTML = `<strong>Resultado:</strong> ${resultado}`;
    };

    generarInputs();
});
