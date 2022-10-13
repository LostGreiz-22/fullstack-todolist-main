import { deleteMethod, get } from '../../util/http';

export const getAllTodo = () => {
    const url = '/todo/getAll';
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'SET_TODOLIST',
                payload: response
            })
        }).catch((error) => {
            reject(error)
        })
    })
}

export const addTodo = (newTodo) => {
    const url = `/todo/addTodo/${newTodo}`
    return new Promise( (resolve, reject) => {
        const promise = put(url);
        promise.then((response) => {
            resolve({
                type: 'SET_TODOLILST',
                payload: response
            })

        })
    
    })}
