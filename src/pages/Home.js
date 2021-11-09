import React, { Fragment, useContext, useEffect } from 'react'
import {Form} from '../components/Form'
import {Notes} from '../components/Notes'
import { FirebaseContext } from '../context/firebase/firebaseContext'
import {Loader} from '../components/Loader'

export const Home = () => {
    const {loading, notes , featchNotes, removeNote} = useContext(FirebaseContext)

    useEffect( () => {
        featchNotes()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <Form/>

            <hr/>

            {loading
               ? <Loader />
               : <Notes notes={notes} onRemove={removeNote} />    
            }
        </Fragment>
    )
}