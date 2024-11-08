import './loginfooter.css'
import LoginError from './loginerror'

function LoginFooter(){
    return (
        <footer className="CommonEntrance-footer">
            <img className="CommonEntrance-footerCopyrightImage" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.2' viewBox='0 0 800 800' width='800' height='800'%3E%3Cpath fill-rule='evenodd' d='m0 266.7l266.7-266.7h266.6l266.7 266.7v266.6l-266.7 266.7h-266.6l-266.7-266.7zm432.3 235.4h254.5v-203.6h-254.5zm63.6-161.2h127.3v33.9h-127.3zm127.3 67.9v50.9h-127.3v-50.9zm-509.2 93.3h77.1l114.1-130.8v130.8h63.7v-203.8l0.1-0.2h-77.7l-113.5 130.7v-130.7h-63.8z' fill='%23fff'/%3E%3C/svg%3E" />
            <div className="CommonEntrance-footerText">
                <p className="CommonEntrance-footerTextAbout">Ярослав Вязьмитин (sn0wcat/sn0wgit). Не защищено правами и не претендуется на оригинальное авторство.</p>
                <p className="CommonEntrance-footerTextLinks"><a href="///sn0wgit.github.io">Подробнее обо мне</a> <a href="///github.com/sn0wgit/concept-unban-simulator">Исходный код</a> <a href="///tankionline.com">Играй в Танки Онлайн!</a></p>
            </div>
            <LoginError
                heading="Это не Танки Онлайн!"
                description='Всё, что вы здесь увидете ─ не является Танками Онлайн. Мы не требуем ваших пользовательских данных. Это лишь демонстрация/концепт.'
            />
        </footer>
    )
}

export default LoginFooter