import './errorcontent.css'
import { useContext } from 'react'
import { UsernameContext } from '../UsernameContext'

function ErrorContent() {
    const inheritedUsernameContext = useContext(UsernameContext)
    const userName = inheritedUsernameContext.username

    return(
        <div className="DialogContainerComponentStyle-contentContainer">
            <div className="SystemMessageStyle-content">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='85' height='76' viewBox='0 0 85 76' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M45.0563 10.2308L75.7317 62.8462C76.8678 64.7949 75.4477 67.2308 73.1754 67.2308H11.8246C9.55234 67.2308 8.13217 64.7949 9.2683 62.8462L39.9437 10.2308C41.0798 8.28205 43.9202 8.28205 45.0563 10.2308ZM32.2749 5.84615C36.8194 -1.94872 48.1806 -1.94872 52.7251 5.84616L83.4006 58.4615C87.9451 66.2564 82.2644 76 73.1754 76H11.8246C2.73557 76 -2.94506 66.2564 1.59945 58.4615L32.2749 5.84615ZM39.4143 50.2458H45.6886L47 24H38.1029L39.4143 50.2458ZM39.1571 56.0215C38.3857 56.7916 38 57.9288 38 59.4332C38 60.8838 38.3943 62.0121 39.1829 62.818C39.9714 63.606 41.0857 64 42.5257 64C43.9314 64 45.0286 63.597 45.8171 62.7911C46.6057 61.9673 47 60.848 47 59.4332C47 57.9646 46.6057 56.8364 45.8171 56.0484C45.0457 55.2604 43.9486 54.8664 42.5257 54.8664C41.0514 54.8664 39.9286 55.2514 39.1571 56.0215Z' fill='%23DB5553'/%3E%3C/svg%3E" className="SystemMessageStyle-icon"/>
                <span className="SystemMessageStyle-message">{userName}! 
Ваш аккаунт заблокирован.

Причина: п. 2.5 Правил игры. 
Использование программ и иных средств, которые могут давать игроку искусственное преимущество в бою, имитировать его действия, автоматизировать игровой процесс или ухудшить функционирование игры, электронных устройств третьих лиц.
Если вы уверены, что мы ошиблись — подайте аппеляцию.
                </span>
            </div>
        </div>
    )
}

export default ErrorContent