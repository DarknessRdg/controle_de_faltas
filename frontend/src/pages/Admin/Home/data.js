/* eslint-disable import/first */
import TeachersImg from '../../../assets/img/admin/teachers.png'
import StudentsImg from '../../../assets/img/admin/students.png'
import ModulesImg from '../../../assets/img/admin/modules.png'
import ClassesImg from '../../../assets/img/admin/classes.png'
import Frequency from '../../../assets/img/admin/frequency.png'
import RegisterFrequency from '../../../assets/img/admin/frequency-register.png'


const cards = [
    {
        title: 'Professores',
        img: TeachersImg,
        redirect: '/admin/teachers'
    },
    {
        title: 'Alunos',
        img: StudentsImg,
        redirect: '/admin/students'
    },
    {
        title: 'Módulos',
        img: ModulesImg,
        redirect: '/admin/modules'
    },
    {
        title: 'Aulas',
        img: ClassesImg,
        redirect: '/admin/classes'
    },
    {
        title: 'Frequência',
        img: Frequency,
        redirect: '/admin/frequecy'
    },
    {
        title: 'Chamada',
        img: RegisterFrequency,
        redirect: '/admin/frequency/register'
    },
]


export default cards