import React, {useEffect} from 'react';
import M from 'materialize-css';
import './styles.css';

import ClassModules from  '../../../components/ClassModules';


export default () => {
    useEffect(() => {
        M.AutoInit();
    }, [])

    return (<>
        <div className="row">
            <div id="modules" className="col s12">
                <h3 className="center">Saiba mais!</h3>
                <ClassModules modules={[
                    {
                        header: {
                            name: 'Scratch',
                        },
                        body: <span>Lorem ipsum dolor sit amet.</span>
                    },
                    {
                        header: {
                            name: 'Python',
                        },
                        body: <p className="text-justify">Python é uma linguagem de programação de alto nível, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991. Atualmente possui um modelo de desenvolvimento comunitário, aberto e gerenciado pela organização sem fins lucrativos Python Software Foundation. Apesar de várias partes da linguagem possuírem padrões e especificações formais, a linguagem como um todo não é formalmente especificada. O padrão de facto é a implementação CPython.
                        A linguagem foi projetada com a filosofia de enfatizar a importância do esforço do programador sobre o esforço computacional. Prioriza a legibilidade do código sobre a velocidade ou expressividade. Combina uma sintaxe concisa e clara com os recursos poderosos de sua biblioteca padrão e por módulos e frameworks desenvolvidos por terceiros.</p>
                    },
                    {
                        header: {
                            name: 'Arduino',
                        },
                        body: <span>Lorem ipsum dolor sit amet.</span>
                    }
                ]} />
            </div>
        </div>
    </>)
}