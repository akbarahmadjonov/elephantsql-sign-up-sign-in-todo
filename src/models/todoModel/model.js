const GETALL = `
    select * from todos where user_id = $1 order by id asc;
`   

const GETONETODO = `
    select * from todos where id = $1
`

const CREATE_TODO = `
insert into todos( todo_value , user_id) values ($1, $2 )
RETURNING *
`

const PUTTODO = `
    update todos 
    set todo_value = $2
    where id = $1
`

const DELETETODO = `
DELETE FROM todos WHERE id = $1;
`

module.exports = {
    GETALL , CREATE_TODO , PUTTODO , DELETETODO , GETONETODO
}