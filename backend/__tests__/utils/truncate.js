import database from '../../src/service/ConnectionDataBase';

const truncate = () => {
    return Promise.all(
        Object.keys(database.connection.models).map(key => {
            return database.connection.models[key].destroy({
                truncate: true,
                force: true
            });
        })
    );
}

export default truncate;