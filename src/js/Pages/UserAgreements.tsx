import React, { useLayoutEffect } from 'react'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/Footer'

function UserAgreements() {
	document.title = 'Пользовательское Соглашение'
	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<div className="lg:w-[1920rem]">
				<div className=" overflow-hidden">
					<Header />
					<div className="lg:mr-[340rem] px-[16rem] lg:px-[120rem]">
						<div className="font-bodyalt font-[600] text-[32rem] leading-[38rem] mb-[32rem] lg:text-[64rem] lg:leading-[75rem] text-[#16191c] lg:mb-[64rem]">
							Пользовательское Соглашение
						</div>
						<div className="font-body font-[400] text-[14rem] leading-[21rem] mb-[21rem] lg:text-[20rem] lg:leading-[34rem] text-[#686868] lg:mb-[21rem] lg:tracking-[0.03em]">
							Настоящее Пользовательское Соглашение (Далее
							Соглашение) регулирует отношения между ООО "МИДО"
							ИНН 6141058830 КПП 614101001 в лице Генерального
							директора Лапшина Владислава Владимировича (далее
							Фитнес Как Наука или Администрация) с одной стороны
							и пользователем мобильного приложения с другой.
							Продукты Администрации не является средством
							массовой информации.
						</div>
						<div className="font-body font-[600] text-[14rem] leading-[21rem] mb-[4rem] lg:text-[22rem] lg:leading-[32rem] text-[#16191c] lg:mb-[4rem] lg:tracking-[0.05em]">
							Используя мобильное приложение, Вы соглашаетесь с
							условиями данного соглашения.
						</div>
						<div className="font-body font-[600] text-[14rem] mb-[32rem] leading-[21rem] lg:text-[22rem] lg:leading-[32rem] text-[#16191c] lg:mb-[64rem] lg:tracking-[0.05em]">
							Если Вы не согласны с условиями данного соглашения,
							не используйте информационные продукты ООО “МИДО”!
						</div>
						<div className="font-[600] text-[22rem] leading-[26rem] mb-[16rem] font-bodyalt lg:text-[40rem] lg:leading-[47rem] text-[#16191c] lg:mb-[48rem]">
							Права и обязанности сторон
						</div>
						<div className="mb-[24rem] lg:mb-[48rem]">
							<div className="font-bodyalt lg:font-body font-[600] text-[22rem] leading-[26rem] lg:text-[32rem] lg:leading-[37rem] text-[#16191c] mb-[8rem] lg:mb-[20rem]">
								Пользователь имеет право:
							</div>
							<ul className="ml-[22rem] lg:ml-[27rem] list-disc list-outsude font-body font-[400] text-[14rem] leading-[21rem] lg:text-[20rem] lg:leading-[34rem] text-[#686868] mb-[24rem] lg:mb-[48rem] lg:tracking-[0.05em]">
								<li>
									осуществлять поиск информации в мобильном
									приложении.
								</li>
								<li>
									получать информацию рекомендательного
									характера в мобильном приложении о
									программах питания и тренировках.
								</li>
								<li>
									делиться с Администрацией результатами своих
									достижений.
								</li>
								<li>предоставлять данные о себе.</li>
								<li>
									использовать информацию сайта в личных
									некоммерческих целях.
								</li>
							</ul>
						</div>
						<div className="mb-[24rem] lg:mb-[48rem]">
							<div className="font-bodyalt font-[600] text-[22rem] leading-[26rem] lg:text-[32rem] lg:leading-[37rem] text-[#16191c] mb-[8rem] lg:mb-[20rem]">
								Администрация имеет право:
							</div>
							<ul className="ml-[22rem] lg:ml-[27rem] list-disc list-outsude font-body font-[400] text-[14rem] leading-[21rem] lg:text-[20rem] lg:leading-[34rem] text-[#686868] mb-[24rem] lg:mb-[48rem] lg:tracking-[0.05em]">
								<li>
									по своему усмотрению и необходимости
									создавать, изменять, отменять правила.
								</li>
								<li>
									ограничивать доступ к любой информации на
									сайте.
								</li>
								<li>
									создавать, изменять, удалять информацию.
								</li>
							</ul>
						</div>
						<div className="mb-[24rem] lg:mb-[48rem]">
							<div className="font-bodyalt font-[600] text-[22rem] leading-[26rem] lg:text-[32rem] lg:leading-[37rem] text-[#16191c] mb-[16rem] lg:mb-[24rem]">
								Пользователь обязуется:
							</div>
							<ul className="ml-[22rem] lg:ml-[27rem] list-disc list-outsude font-body font-[400] text-[14rem] leading-[21rem] lg:text-[20rem] lg:leading-[34rem] text-[#686868] mb-[24rem] lg:mb-[48rem] lg:tracking-[0.05em]">
								<li>
									обеспечить достоверность предоставляемой
									информации о себе и своих результатах.
								</li>
								<li>
									обеспечивать сохранность личных данных от
									доступа третьих лиц.
								</li>
								<li>
									обновлять Персональные данные,
									предоставленные при регистрации, в случае их
									изменения.
								</li>
								<li>
									не копировать информацию с других
									источников.
								</li>
								<li>
									не распространять информацию, которая
									направлена на пропаганду войны, разжигание
									национальной, расовой или религиозной
									ненависти и вражды, а также иной информации,
									за распространение которой предусмотрена
									уголовная или административная
									ответственность.
								</li>
								<li>
									не нарушать работоспособность мобильного
									приложения.
								</li>
								<li>
									не создавать несколько учётных записей в
									мобильном приложении, если фактически они
									принадлежат одному и тому же лицу.
								</li>
								<li>
									не передавать в пользование свою учетную
									запись и/или логин и пароль своей учетной
									записи третьим лицам.
								</li>
								<li>
									не регистрировать учетную запись от имени
									или вместо другого лица за исключением
									случаев, предусмотренных законодательством
									РФ.
								</li>
								<li>
									не использовать скрипты (программы) для
									автоматизированного сбора информации и/или
									взаимодействия с мобильным приложением и его
									Сервисами.
								</li>
							</ul>
						</div>
						<div className="mb-[32rem] lg:mb-[48rem]">
							<div className="font-bodyalt font-[600] text-[22rem] leading-[26rem] lg:text-[32rem] lg:leading-[37rem] text-[#16191c] mb-[16rem] lg:mb-[24rem]">
								Администрация обязуется:
							</div>
							<ul className="ml-[22rem] lg:ml-[27rem] list-disc list-outsude font-body font-[400] text-[14rem] leading-[21rem] lg:text-[20rem] lg:leading-[34rem] text-[#686868] mb-[24rem] lg:mb-[48rem] lg:tracking-[0.05em]">
								<li>
									поддерживать работоспособность мобильного
									приложения за исключением случаев, когда это
									невозможно по независящим от Администрации
									причинам.
								</li>
								<li>
									осуществлять разностороннюю защиту учетной
									записи и данных предоставленных
									Пользователем во время пользования мобильным
									приложением.
								</li>
								<li>
									защищать информацию, распространение которой
									ограничено или запрещено законами путем
									вынесения предупреждения либо удалением
									учетной записи пользователя, нарушившего
									правила.
								</li>
								<li>
									предоставить всю доступную информацию о
									Пользователе уполномоченным на то органам
									государственной власти в случаях,
									установленных законом.
								</li>
							</ul>
						</div>
						<div className="mb-[32rem] lg:mb-[64rem]">
							<div className="font-bodyalt font-[600] text-[24rem] leading-[28rem] lg:text-[32rem] lg:leading-[37rem] text-[#16191c] mb-[24rem] lg:mb-[48rem]">
								Ответственность сторон
							</div>
							<ul className="ml-[22rem] lg:ml-[27rem] list-disc list-outsude font-body font-[400] text-[14rem] leading-[21rem] lg:text-[20rem] lg:leading-[34rem] text-[#686868] mb-[24rem] lg:mb-[48rem] lg:tracking-[0.05em]">
								<li>
									Администрация не несёт ответственность за
									несовпадение ожидаемых Пользователем и
									реально полученных услуг.
								</li>
								<li>
									Администрация не несет никакой
									ответственности за услуги, предоставляемые
									третьими лицами.
								</li>
								<li>
									любые публикации материалов, связанных с
									программой питания и/или программ физических
									тренировок несут строго рекомендательных
									характер. Придерживаться рекомендаций строго
									на усмотрение Пользователя мобильным
									приложением.
								</li>
								<li>
									Администрация не несет никакой
									ответственности в случае возникновения
									болезней и/или травм (в том числе повлекшие
									смерть или другие тяжкие последствия для
									организма) вследствие следования
									рекомендациям Администрации по выполнению
									тех или иных упражнений Пользователем.
								</li>
								<li>
									в случае возникновения форс-мажорной
									ситуации (боевые действия, чрезвычайное
									положение, стихийное бедствие и т. д.)
									Администрация не гарантирует сохранность
									информации, размещенной Пользователем, а
									также бесперебойную работу информационного
									ресурса.
								</li>
							</ul>
						</div>
						<div className="mb-[100rem] lg:mb-[150rem]">
							<div className="font-bodyalt font-[600] text-[24rem] leading-[28rem] lg:text-[32rem] lg:leading-[37rem] text-[#16191c] mb-[24rem] lg:mb-[48rem]">
								Условия действия Соглашения
							</div>
							<ul className="ml-[22rem] lg:ml-[27rem] list-disc list-outsude font-body font-[400] text-[14rem] leading-[21rem] lg:text-[20rem] lg:leading-[34rem] text-[#686868] mb-[24rem] lg:mb-[48rem] lg:tracking-[0.05em]">
								<li>
									данное Соглашение вступает в силу при
									использовании любых продуктов ООО “МИДО”.
								</li>
								<li>соглашение действует бессрочно.</li>
								<li>
									администрация оставляет за собой право в
									одностороннем порядке изменять данное
									соглашение по своему усмотрению.
								</li>
								<li>
									администрация не оповещает пользователей об
									изменении в Соглашении.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default UserAgreements
