import database from '../../src/database/ConnectionDataBase';

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