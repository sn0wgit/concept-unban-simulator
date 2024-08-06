import './loginfooter.css'
import LoginError from './loginerror'

function LoginFooter(){
    return (
        <footer className="CommonEntrance-footer">
            <img className="CoomonEntrance-footerCopyrightImage" src="data:image/svg+xml,%3Csvg version='1.2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800' width='800' height='800'%3E%3Cpath fill-rule='evenodd' fill='%23fff6f6' d='m243.4 0l313.4 0.1c5.8 0 11.3 2.3 15.3 6.4l221.6 221.6c4 4.1 6.3 9.6 6.3 15.3l-0.1 313.4c0 5.8-2.3 11.3-6.4 15.3l-221.6 221.6c-4.1 4-9.6 6.3-15.3 6.3l-313.4-0.1c-5.8 0-11.3-2.3-15.3-6.4l-221.6-221.6c-4-4.1-6.3-9.6-6.3-15.3l0.1-313.4c0-5.8 2.3-11.3 6.4-15.3l221.6-221.6c4.1-4 9.6-6.3 15.3-6.3zm105.5 512.5h-71v-225.2h71v-52.5h-212.9v52.5h71v225.2h-71v52.5h212.9zm315.1-277.7h-75.3l-39.2 167.9-19.9 95.1h-3.8l-19.4-95.1-38.8-167.9h-79l87.6 330.2h100.2z'/%3E%3C/svg%3E" />
            <div className="CommonEntrance-footerText">
                <p className="CommonEntrance-footerTextAbout">Ярослав Вязьмитин (sn0wcat/sn0wgit). Не защищено правами и не претендуется на оригинальное авторство.</p>
                <p className="CommonEntrance-footerTextLinks"><a href="///sn0wgit.githib.io">Подробнее обо мне</a> <a href="///githib.com/sn0wgit/concept-tankihelp">Исходный код</a> <a href="///tankionline.com">Играй в Танки Онлайн!</a></p>
            </div>
            <LoginError
                heading="Это не Танки Онлайн!"
                description='Всё, что вы здесь увидете ─ не является Танками Онлайн. Мы не требуем ваших пользовательских данных. Это лишь демонстрация/концепт.'
            />
        </footer>
    )
}

export default LoginFooter