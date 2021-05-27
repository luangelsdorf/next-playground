import React from 'react';
import Head from 'next/head';
import { validateForm } from "../../public/js/modules/busca-cores.js";

export default function Home({ content }) {

    async function handleSubmit(e) {
        e.preventDefault()
        let input = e.target[0].value
        let container = document.getElementById('color')
        let errorLog = document.getElementById('errorLog')
        validateForm(input, errorLog, container, content)
    }

    return (
        <>
            <Head>
                <title>Busca Cores</title>
                <link rel="stylesheet" href="/css/busca-cores.css"/>
            </Head>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h1>Visualizar Cores</h1>
                        <form onSubmit={ handleSubmit }>
                            <label className="form-label" htmlFor="cor">Entre com uma cor hex:</label>
                            <div>
                                <input className="form-control" maxLength="6" required="required" id="cor" type="text"/>
                                <button className="btn btn-primary" type="submit">Visualizar</button>
                            </div>
                        </form>
                        <div id="errorLog" />
                    </div>

                    <div className="col-12 col-md-6">
                        <div id="color" />
                    </div>
                    <div className="col-6" />
                    <div className="col-6">
                        <code />
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const dic = await fetch('https://raw.githubusercontent.com/lulaluano/next-playground/master/public/etc/pt-br.dic')
    const words =  await dic.text()
    const content = words.split('\n')
    return {
        props: { content }
    }
}
