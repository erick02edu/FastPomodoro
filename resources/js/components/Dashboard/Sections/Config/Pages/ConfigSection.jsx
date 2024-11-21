import { useContext, useState } from "react";
import { BtnToggleDarkMode } from "../../../Shared/BtnToggleDarkMode";
import { ConfigContext } from "../Context/ContextConfig";
import { ToastSaveSettings } from "../Components/ToastSaveSettings";


export default function ConfigSection(){

    const {config,handleConfig,saveSettings}=useContext(ConfigContext)

    return <div className="">
        <h3>Configuraciones</h3>

        <div className=" bg-body-tertiary border rounded-2 mt-4 p-3">
            <strong>
                Valores por defecto para tareas
            </strong>
            <div className="mt-2">
                <label className="form-label"><small>Tiempo de los pomodoros por defecto</small></label>
                <select className="form-select" name="TimeInterval" value={config.TimeInterval} onChange={(e)=>{handleConfig(e)}}>
                    <option value={5}>5 min</option>
                    <option value={10}>10 min</option>
                    <option value={25}>25 min</option>
                    <option value={30}>30 min</option>
                    <option value={40}>40 min</option>
                </select>

                <label className="form-label mt-2"><small>Tiempo de descanso por defecto</small></label>
                <select className="form-select" name="breakTime" value={config.breakTime} onChange={(e)=>{handleConfig(e)}}>
                    <option value={1}>1 min</option>
                    <option value={2}>2 min</option>
                    <option value={5}>5 min</option>
                    <option value={10}>10 min</option>
                    <option value={15}>15 min</option>
                </select>

                <label className="form-label mt-2"><small>Numero de pomodoros por defecto</small></label>
                <select className="form-select" name="numPomodoros" value={config.numPomodoros} onChange={(e)=>{handleConfig(e)}}>
                    <option value={1}>1 pomodoro</option>
                    <option value={2}>2 pomodoros</option>
                    <option value={3}>3 pomodoros</option>
                    <option value={4}>4 pomodoro</option>
                    <option value={5}>5 pomodoros</option>
                </select>


                <label className="form-label mt-2"><small>Cantidad de pomodoros para hacer un descanso largo</small></label>
                <select className="form-select" name="numPomoBreakTime" value={config.numPomoBreakTime} onChange={(e)=>{handleConfig(e)}}>
                    <option value={2}>2 pomodoro</option>
                    <option value={3}>3 pomodoros </option>
                    <option value={4}>4 pomodoros</option>
                    <option value={5}>5 pomodoros</option>
                    <option value={6}>6 pomodoros</option>
                </select>

                <label className="form-label mt-2"><small>Tiempo del descanso largo por defecto</small></label>
                <select className="form-select"  name="breakTimeLong" value={config.breakTimeLong} onChange={(e)=>{handleConfig(e)}}>
                    <option value={10}>10 min</option>
                    <option value={15}>15 min</option>
                    <option value={20}>20 min</option>
                    <option value={25}>25 min</option>
                    <option value={30}>30 min</option>
                </select>
            </div>
        </div>

        <div className=" bg-body-tertiary border rounded-2 mt-4 p-3">
            <strong>Modo oscuro</strong>
            <div className="mt-3 d-flex justify-content-between">
                <div>
                    <label className="form-label"><small>Modo oscuro por defecto</small></label>
                </div>
                <div>
                    <BtnToggleDarkMode />
                </div>
            </div>

        </div>

        <div className="w-100 mt-3 d-flex justify-content-start">
            <button className="btn btn-primary text-white" onClick={saveSettings}>
                Guardar configuraciones
            </button>
        </div>

        <ToastSaveSettings/>

    </div>
}




