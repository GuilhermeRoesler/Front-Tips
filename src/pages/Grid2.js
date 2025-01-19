import React from 'react'

const Grid2 = () => {
    const printImage = (e) => {
        e.target.classList.add('hidden');
        window.print()
        e.target.classList.remove('hidden');
    }

    return (
        <main id="Grid2">
            <section id="double_image">
                <section id="single_image">
                    <section className="top_section">
                        <p>Nome Completo: </p>
                        <p>SPP: </p>
                        <p>Data SAE: </p>
                        <p>Data de Nascimento: </p>
                        <p>Nome da Mãe: </p>
                        <p>Plano de Educação: </p>
                    </section>
                    <section className="mid_section">
                        <div className="mid_header">
                            <h6 className="nobrdr"> Situação </h6>
                            <h6 className="nobrdr"> Background (Informações) </h6>
                            <h6 className="nobrdr"> Avaliação do Paciente Data: </h6>
                            <h6 className="nobrdr"> Recomendação: </h6>
                        </div>
                        <div className="mid_low_header">
                            <div className="left_header">
                                <p id="quarto" className="nobrdr">Quarto: </p>
                                <p id="leito" className="nobrdr">Leito: </p>
                                <p id="diagnosticos" className="nobrdr">Diagnósticos/Comorbidades</p>
                            </div>
                            <div className="center_header">
                                <p className="nobrdr">Manhã: </p>
                                <p className="nobrdr">Tarde: </p>
                                <p className="nobrdr">Noite: </p>
                            </div>
                            <div className="right_header">
                                <p id="exames">Prioridades/Exames</p>
                                <p id="antibioticos">Antibióticos</p>
                            </div>
                        </div>
                        <section className="main_content">
                            <div className="left_box">
                                <div id="riscos">
                                    <div id="riscos_caixa1">
                                        <div className="riscos_conteudo">
                                            <h6 className="nobrdr">Riscos:</h6>
                                            <li id="riscos_list" className="nobrdr">
                                                <div>
                                                    <p className="nobrdr">( ) Queda </p>
                                                    <p className="nobrdr">( ) Flebite </p>
                                                    <p className="nobrdr">( ) LLP </p>
                                                    <p className="nobrdr">( ) BCP </p>
                                                </div>
                                                <div>
                                                    <p className="nobrdr">( ) Controle Glicêmico </p>
                                                    <p className="nobrdr">( ) Fuga </p>
                                                    <p className="nobrdr">( ) Vulnerável </p>
                                                </div>
                                            </li>
                                        </div>
                                        <div className="riscos_footer">
                                            <p id="queda">Queda: </p>
                                            <p id="dispositivos" className="nobrdr">Dispositivo(s): </p>
                                        </div>
                                    </div>
                                    <div id="riscos_caixa2">
                                        <div id="riscos_conteudo2" className="riscos_conteudo">
                                        </div>
                                    </div>
                                </div>
                                <div id="alergias" className="nobrdr">
                                    <div id="alergias_caixa1" className="nobrdr">
                                        <p className="nobrdr">Alergias: </p>
                                    </div>
                                    <div id="alergias_caixa2">
                                    </div>
                                </div>
                                <div id="bottom_footer1" className="nobrdr">
                                    <p>Braden: </p>
                                    <p>Morse/Aval: </p>
                                    <p>Aval. da Dor: </p>
                                </div>
                                <div id="bottom_footer2" className="nobrdr">
                                    <p>Fugulin: </p>
                                    <p> Escala TEV: </p>
                                </div>
                            </div>
                            <div className="center_box">
                                <div id="caixa_prioridades">
                                    <div id="prioridade">
                                        <div className="prioridades_header">
                                            <p id="prioridade_avaliacao" className="nobrdr">Prioridade de avaliação</p>
                                            <div id="sim_nao" className="nobrdr">
                                                <p className="nobrdr">Sim ( )</p>
                                                <p id="nao" className="nobrdr">Não ( )</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="center_footer">
                                    <p className="nobrdr">Médico: </p>
                                </div>
                            </div>
                            <div className="right_box">
                                <div id="upper_area" className="nobrdr">
                                    <div id="exames_content">
                                    </div>
                                    <div id="antibioticos_content" className="nobrdr">
                                        <div id="espacamento" className="nobrdr"></div>
                                        <p className="nobrdr">I:_/_/__</p>
                                        <p className="nobrdr">D:___/__dias</p>
                                    </div>
                                </div>
                                <div id="lower_area" className="nobrdr">
                                    <p id="precaucao">Precaução</p>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            </section>
            <button id="print_button" onClick={printImage}>Imprimir</button>
        </main>
    )
}

export default Grid2;