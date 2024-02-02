import React, { useLayoutEffect } from 'react'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/Footer'

function PrivacyPolicy() {
	document.title = 'Политика Конфиденциальности'
	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<div className="lg:w-[1920rem]">
				<div className=" overflow-hidden">
					<Header />
					<div className="lg:mr-[470rem] px-[16rem] lg:px-[120rem]">
						<div className="font-bodyalt font-[600] text-[32rem] mb-[32rem] lg:text-[64rem] lg:leading-[75rem] text-[#16191c] lg:mb-[64rem]">
							Политика Конфиденциальности
						</div>
						<div className='ml-[28rem] lg:ml-[34rem] font-bodyalt font-[600] text-[22rem] text-[#16191c] leading-[26rem] mb-[20rem] lg:font-body lg:text-[32rem] lg:leading-[37rem] lg:mb-[24rem] before:content-["1."] before:absolute before:-translate-x-[28rem] lg:before:-translate-x-[34rem]'>
							Общие положения
						</div>
						<div className="lg:ml-[34rem] font-body font-[400] text-[14rem] text-[#686868] leading-[21rem] lg:text-[20rem] lg:leading-[34rem] mb-[8rem] lg:mb-[16rem] ">
							Настоящее Пользовательское Соглашение (Далее
							Соглашение) регулирует отношения между ООО "МИДО"
							ИНН 6141058830 КПП 614101001 в лице Генерального
							директора Лапшина Владислава Владимировича (далее
							Фитнес Как Наука или Администрация) с одной стороны
							и пользователем мобильного приложения с другой.
							Продукты Администрации не является средством
							массовой информации.
						</div>
						<div className="ml-[33rem] lg:ml-[86rem] font-body font-[400] text-[14rem] text-[#686868] leading-[21rem] mb-[32rem] lg:text-[20rem] lg:leading-[34rem] lg:mb-[48rem]">
							<div className='before:content-["1.1."] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem] mb-[8rem] lg:mb-[16rem]'>
								Оператор ставит своей важнейшей целью и условием
								осуществления своей деятельности соблюдение прав
								и свобод человека и гражданина при обработке его
								персональных данных, в том числе защиты прав на
								неприкосновенность частной жизни, личную и
								семейную тайну.
							</div>
							<div className='mb-[8rem] lg:mb-[16rem] before:content-["1.2."] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]'>
								Настоящая политика Оператора в отношении
								обработки персональных данных (далее — Политика)
								применяется ко всей информации, которую Оператор
								может получить о пользователях мобильного
								приложения Фитнес Как Наука.
							</div>
						</div>
						<div className="ml-[28rem] lg:ml-[34rem] font-bodyalt font-[600] text-[22rem] text-[#16191c] leading-[26rem] mb-[20rem] lg:font-body lg:text-[32rem] lg:leading-[37rem] lg:mb-[24rem]  before:content-['2.'] before:absolute before:-translate-x-[28rem] lg:before:-translate-x-[34rem]">
							Основные понятия, используемые в Политике
						</div>
						<div className="ml-[33rem] lg:ml-[86rem] font-body font-[400] text-[14rem] text-[#686868] leading-[21rem] mb-[32rem] lg:text-[20rem] lg:leading-[34rem] lg:mb-[48rem]">
							<div className=" before:content-['2.1.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Автоматизированная обработка персональных данных
								— обработка персональных данных с помощью
								средств вычислительной техники.
							</div>
							<div className="before:content-['2.2.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Блокирование персональных данных — временное
								прекращение обработки персональных данных (за
								исключением случаев, если обработка необходима
								для уточнения персональных данных).
							</div>
							<div className="before:content-['2.3.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Мобильное приложение — совокупность графических
								и информационных материалов, а также программ
								для ЭВМ и баз данных, доступных для скачивания в
								магазинах приложений.
							</div>
							<div className="before:content-['2.4.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Информационная система персональных данных —
								совокупность содержащихся в базах данных
								персональных данных и обеспечивающих их
								обработку информационных технологий и
								технических средств.
							</div>
							<div className="before:content-['2.5.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Обезличивание персональных данных — действия, в
								результате которых невозможно определить без
								использования дополнительной информации
								принадлежность персональных данных конкретному
								Пользователю или иному субъекту персональных
								данных.
							</div>
							<div className="before:content-['2.6.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Обработка персональных данных — любое действие
								(операция) или совокупность действий (операций),
								совершаемых с использованием средств
								автоматизации или без использования таких
								средств с персональными данными, включая сбор,
								запись, систематизацию, накопление, хранение,
								уточнение (обновление, изменение), извлечение,
								использование, передачу (распространение,
								предоставление, доступ), обезличивание,
								блокирование, удаление, уничтожение персональных
								данных.
							</div>
							<div className="before:content-['2.7.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Оператор — государственный орган, муниципальный
								орган, юридическое или физическое лицо,
								самостоятельно или совместно с другими лицами
								организующие и/или осуществляющие обработку
								персональных данных, а также определяющие цели
								обработки персональных данных, состав
								персональных данных, подлежащих обработке,
								действия (операции), совершаемые с персональными
								данными.
							</div>
							<div className="before:content-['2.8.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Персональные данные — любая информация,
								относящаяся прямо или косвенно к определенному
								или определяемому Пользователю мобильного
								приложения Фитнес Как Наука.
							</div>
							<div className="before:content-['2.9.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Персональные данные, разрешенные субъектом
								персональных данных для распространения, —
								персональные данные, доступ неограниченного
								круга лиц к которым предоставлен субъектом
								персональных данных путем дачи согласия на
								обработку персональных данных, разрешенных
								субъектом персональных данных для
								распространения в порядке, предусмотренном
								Законом о персональных данных (далее —
								персональные данные, разрешенные для
								распространения).
							</div>
							<div className="before:content-['2.10.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Пользователь — любой пользователь мобильного
								устройства, который скачал мобильное приложение
								Фитнес Как Наука на свой телефон.
							</div>
							<div className="before:content-['2.11.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Предоставление персональных данных — действия,
								направленные на раскрытие персональных данных
								определенному лицу или определенному кругу лиц.
							</div>
							<div className="before:content-['2.12.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Распространение персональных данных — любые
								действия, направленные на раскрытие персональных
								данных неопределенному кругу лиц (передача
								персональных данных) или на ознакомление с
								персональными данными неограниченного круга лиц,
								в том числе обнародование персональных данных в
								средствах массовой информации, размещение в
								информационно-телекоммуникационных сетях или
								предоставление доступа к персональным данным
								каким-либо иным способом.
							</div>
							<div className="before:content-['2.13.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Трансграничная передача персональных данных —
								передача персональных данных на территорию
								иностранного государства органу власти
								иностранного государства, иностранному
								физическому или иностранному юридическому лицу.
							</div>
							<div className="before:content-['2.14.'] mb-[32rem] lg:mb-[48rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Уничтожение персональных данных — любые
								действия, в результате которых персональные
								данные уничтожаются безвозвратно с
								невозможностью дальнейшего восстановления
								содержания персональных данных в информационной
								системе персональных данных и/или уничтожаются
								материальные носители персональных данных.
							</div>
						</div>
						<div className="ml-[28rem] lg:ml-[34rem] font-bodyalt font-[600] text-[22rem] text-[#16191c] leading-[26rem] mb-[20rem] lg:font-body lg:text-[32rem] lg:leading-[37rem] lg:mb-[24rem]  before:content-['3.'] before:absolute before:-translate-x-[28rem] lg:before:-translate-x-[34rem]">
							Основные права и обязанности Оператора
						</div>
						<div className="ml-[33rem] lg:ml-[86rem] font-body font-[400] text-[14rem] text-[#686868] leading-[21rem] mb-[8rem] lg:text-[32rem] lg:leading-[34rem] lg:mb-[48rem]">
							<div className="">
								<div className="before:content-['3.1.'] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem] font-body font-[400] text-[16rem] lg:text-[20rem] lg:leading-[34rem] text-[#686868] lg:tracking-[0.05em] mb-[8rem] lg:mb-[16rem]">
									Оператор имеет право:
									<ul className="ml-[25rem] lg:ml-[40rem] list-disc list-outside  font-body font-[400] text-[16rem] lg:text-[20rem] lg:leading-[34rem] text-[#686868] mb-[24rem] lg:mb-[16rem] lg:tracking-[0.05em]">
										<li className="">
											получать от субъекта персональных
											данных достоверные информацию и/или
											документы, содержащие персональные
											данные;
										</li>
										<li>
											в случае отзыва субъектом
											персональных данных согласия на
											обработку персональных данных, а
											также, направления обращения с
											требованием о прекращении обработки
											персональных данных, Оператор вправе
											продолжить обработку персональных
											данных без согласия субъекта
											персональных данных при наличии
											оснований, указанных в Законе о
											персональных данных;
										</li>
										<li>
											самостоятельно определять состав и
											перечень мер, необходимых и
											достаточных для обеспечения
											выполнения обязанностей,
											предусмотренных Законом о
											персональных данных и принятыми в
											соответствии с ним нормативными
											правовыми актами, если иное не
											предусмотрено Законом о персональных
											данных или другими федеральными
											законами.
										</li>
									</ul>
								</div>
							</div>
							<div className="">
								<div className="before:content-['3.2.'] mb-[32rem] lg:mb-[48rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem] font-body font-[400] text-[16rem] lg:text-[20rem] lg:leading-[34rem] text-[#686868] lg:tracking-[0.05em]">
									Оператор обязан:
									<ul className="ml-[25rem] lg:ml-[40rem] list-disc list-outside font-body font-[400] text-[16rem] lg:text-[20rem] lg:leading-[34rem] text-[#686868] mb-[24rem] lg:mb-[48rem] lg:tracking-[0.05em]">
										<li>
											предоставлять субъекту персональных
											данных по его просьбе информацию,
											касающуюся обработки его
											персональных данных;
										</li>
										<li>
											организовывать обработку
											персональных данных в порядке,
											установленном действующим
											законодательством РФ;
										</li>
										<li>
											отвечать на обращения и запросы
											субъектов персональных данных и их
											законных представителей в
											соответствии с требованиями Закона о
											персональных данных;
										</li>
										<li>
											сообщать в уполномоченный орган по
											защите прав субъектов персональных
											данных по запросу этого органа
											необходимую информацию в течение 30
											дней с даты получения такого
											запроса;
										</li>
										<li>
											публиковать или иным образом
											обеспечивать неограниченный доступ к
											настоящей Политике в отношении
											обработки персональных данных;
										</li>
										<li>
											принимать правовые, организационные
											и технические меры для защиты
											персональных данных от
											неправомерного или случайного
											доступа к ним, уничтожения,
											изменения, блокирования,
											копирования, предоставления,
											распространения персональных данных,
											а также от иных неправомерных
											действий в отношении персональных
											данных;
										</li>
										<li>
											прекратить передачу
											(распространение, предоставление,
											доступ) персональных данных,
											прекратить обработку и уничтожить
											персональные данные в порядке и
											случаях, предусмотренных Законом о
											персональных данных;
										</li>
										<li>
											исполнять иные обязанности,
											предусмотренные Законом о
											персональных данных.
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="ml-[28rem] lg:ml-[34rem] font-bodyalt font-[600] text-[22rem] text-[#16191c] leading-[26rem] mb-[20rem] lg:text-[32rem] lg:leading-[37rem] lg:mb-[24rem]  before:content-['4.'] before:absolute before:-translate-x-[28rem] lg:before:-translate-x-[34rem]">
							Основные права и обязанности субъектов персональных
							данных
						</div>
						<div className="ml-[33rem] lg:ml-[86rem] font-body font-[400] text-[14rem] text-[#686868] leading-[21rem] mb-[32rem] lg:text-[20rem] lg:leading-[34rem] lg:mb-[48rem]">
							<div className="">
								<div className="before:content-['4.1.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem] font-body font-[400] text-[16rem] lg:text-[20rem] lg:leading-[34rem] text-[#686868] lg:tracking-[0.05em]">
									Субъекты персональных данных имеют право:
									<ul className="ml-[25rem] lg:ml-[40rem] list-disc list-outside font-body font-[400] text-[16rem] lg:text-[20rem] lg:leading-[34rem] text-[#686868] mb-[8rem] lg:mb-[16rem] lg:tracking-[0.05em]">
										<li>
											получать информацию, касающуюся
											обработки его персональных данных,
											за исключением случаев,
											предусмотренных федеральными
											законами. Сведения предоставляются
											субъекту персональных данных
											Оператором в доступной форме, и в
											них не должны содержаться
											персональные данные, относящиеся к
											другим субъектам персональных
											данных, за исключением случаев,
											когда имеются законные основания для
											раскрытия таких персональных данных.
											Перечень информации и порядок ее
											получения установлен Законом о
											персональных данных;
										</li>
										<li>
											требовать от оператора уточнения его
											персональных данных, их блокирования
											или уничтожения в случае, если
											персональные данные являются
											неполными, устаревшими, неточными,
											незаконно полученными или не
											являются необходимыми для заявленной
											цели обработки, а также принимать
											предусмотренные законом меры по
											защите своих прав;
										</li>
										<li>
											выдвигать условие предварительного
											согласия при обработке персональных
											данных в целях продвижения на рынке
											товаров, работ и услуг;
										</li>
										<li>
											на отзыв согласия на обработку
											персональных данных, а также, на
											направление требования о прекращении
											обработки персональных данных;
										</li>
										<li>
											обжаловать в уполномоченный орган по
											защите прав субъектов персональных
											данных или в судебном порядке
											неправомерные действия или
											бездействие Оператора при обработке
											его персональных данных;
										</li>
										<li>
											на осуществление иных прав,
											предусмотренных законодательством
											РФ.
										</li>
									</ul>
								</div>
							</div>
							<div className="">
								<div className="before:content-['4.2.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem] font-body font-[400] text-[16rem] lg:text-[20rem] lg:leading-[34rem] text-[#686868] lg:tracking-[0.05em]">
									Субъекты персональных данных обязаны:
									<ul className="ml-[25rem] lg:ml-[40rem] list-disc list-outside font-body font-[400] text-[16rem] lg:text-[20rem] lg:leading-[34rem] text-[#686868] mb-[8rem] lg:mb-[16rem] lg:tracking-[0.05em]">
										<li>
											предоставлять Оператору достоверные
											данные о себе;
										</li>
										<li>
											сообщать Оператору об уточнении
											(обновлении, изменении) своих
											персональных данных.
										</li>
									</ul>
								</div>
							</div>
							<div className="">
								<div className="before:content-['4.3.'] mb-[32rem] lg:mb-[48rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem] font-body font-[400] text-[16rem] lg:text-[20rem] lg:leading-[34rem] text-[#686868] lg:tracking-[0.05em]">
									Лица, передавшие Оператору недостоверные
									сведения о себе, либо сведения о другом
									субъекте персональных данных без согласия
									последнего, несут ответственность в
									соответствии с законодательством РФ.
								</div>
							</div>
						</div>
						<div className="ml-[28rem] lg:ml-[34rem] font-bodyalt font-[600] text-[22rem] text-[#16191c] leading-[26rem] mb-[20rem] lg:text-[32rem] lg:leading-[37rem] lg:mb-[24rem]  before:content-['5.'] before:absolute before:-translate-x-[28rem] lg:before:-translate-x-[34rem]">
							Принципы обработки персональных данных
						</div>
						<div className="ml-[33rem] lg:ml-[86rem] font-body font-[400] text-[14rem] text-[#686868] leading-[21rem] mb-[32rem] lg:text-[20rem] lg:leading-[34rem] lg:mb-[48rem]">
							<div className="before:content-['5.1.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Обработка персональных данных осуществляется на
								законной и справедливой основе.
							</div>
							<div className="before:content-['5.2.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Обработка персональных данных ограничивается
								достижением конкретных, заранее определенных и
								законных целей. Не допускается обработка
								персональных данных, несовместимая с целями
								сбора персональных данных.
							</div>
							<div className="before:content-['5.3.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Не допускается объединение баз данных,
								содержащих персональные данные, обработка
								которых осуществляется в целях, несовместимых
								между собой.
							</div>
							<div className="before:content-['5.4.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Обработке подлежат только персональные данные,
								которые отвечают целям их обработки.
							</div>
							<div className="before:content-['5.5.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Содержание и объем обрабатываемых персональных
								данных соответствуют заявленным целям обработки.
								Не допускается избыточность обрабатываемых
								персональных данных по отношению к заявленным
								целям их обработки.
							</div>
							<div className="before:content-['5.6.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								При обработке персональных данных обеспечивается
								точность персональных данных, их достаточность,
								а в необходимых случаях и актуальность по
								отношению к целям обработки персональных данных.
								Оператор принимает необходимые меры и/или
								обеспечивает их принятие по удалению или
								уточнению неполных или неточных данных.
							</div>
							<div className="before:content-['5.7.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Хранение персональных данных осуществляется в
								форме, позволяющей определить субъекта
								персональных данных, не дольше, чем этого
								требуют цели обработки персональных данных, если
								срок хранения персональных данных не установлен
								федеральным законом, договором, стороной
								которого, выгодоприобретателем или поручителем
								по которому является субъект персональных
								данных. Обрабатываемые персональные данные
								уничтожаются либо обезличиваются по достижении
								целей обработки или в случае утраты
								необходимости в достижении этих целей, если иное
								не предусмотрено федеральным законом.
							</div>
						</div>
						<div className="ml-[28rem] lg:ml-[34rem] font-bodyalt font-[600] text-[22rem] text-[#16191c] leading-[26rem] mb-[20rem] lg:text-[32rem] lg:leading-[37rem] lg:mb-[24rem]  before:content-['6.'] before:absolute before:-translate-x-[28rem] lg:before:-translate-x-[34rem]">
							Цели обработки персональных данных
						</div>
						<div className="mb-[32rem] lg:mb-[48rem]">
							<div className=" flex flex-col mt-[14rem] font-body font-[400] text-[16rem] lg:text-[20rem] lg:leading-[34rem] text-[#686868] mb-[24rem] lg:mb-[48rem] lg:tracking-[0.05em]">
								<div className="grid grid-rows-[42rem_h-min] lg:grid-cols-[387rem_820rem] pb-[24rem] border-b-[1rem] border-[#E4E4E4]">
									<div className="font-body font-[600] text-[22rem] leading-[32rem] text-[#16191c] lg:pl-[33rem]">
										Цель обработки
									</div>
									<div>
										Предоставление доступа Пользователю к
										сервисам информации и/или материалам,
										содержащимся на веб-сайте.
									</div>
								</div>
								<div className="grid grid-rows-[42rem_h-min] lg:grid-cols-[387rem_820rem] py-[24rem] border-b-[1rem] border-[#E4E4E4]">
									<div className="font-body font-[600] text-[22rem] leading-[32rem] text-[#16191c] lg:pl-[33rem]">
										Персональные данные
									</div>
									<div>
										Фамилия, имя, отчество, год, месяц, дата
										и место рождения, рост, вес, параметры
										тела пользователя.
									</div>
								</div>
								<div className="grid grid-rows-[42rem_h-min] lg:grid-cols-[387rem_820rem] py-[24rem] border-b-[1rem] border-[#E4E4E4]">
									<div className="font-body font-[600] text-[22rem] leading-[32rem] text-[#16191c] lg:pl-[33rem]">
										Правовые основания
									</div>
									<div>
										Уставные (учредительные) документы
										Оператора.
									</div>
								</div>
								<div className="grid grid-rows-[42rem_h-min] lg:grid-cols-[387rem_820rem] pt-[24rem]">
									<div className="whitespace-pre font-body font-[600] text-[22rem] leading-[32rem] text-[#16191c] lg:pl-[33rem]">{`Виды обработки\nперсональных данных`}</div>
									<div>
										Сбор, запись, систематизация,
										накопление, хранение, уничтожение и
										обезличивание персональных данных.
										Отправка информационных писем на адрес
										электронной почты Анализ использования
										мобильного приложения в целях улучшения
										качества и создания нового функционала.
									</div>
								</div>
							</div>
						</div>
						<div className="ml-[28rem] lg:ml-[34rem] font-bodyalt font-[600] text-[22rem] text-[#16191c] leading-[26rem] mb-[20rem] lg:text-[32rem] lg:leading-[37rem] lg:mb-[24rem]  before:content-['7.'] before:absolute before:-translate-x-[28rem] lg:before:-translate-x-[34rem]">
							Условия обработки персональных данных
						</div>
						<div className="ml-[33rem] lg:ml-[86rem] font-body font-[400] text-[14rem] text-[#686868] leading-[21rem] mb-[8rem] lg:text-[20rem] lg:leading-[34rem] lg:mb-[16rem]">
							<div className="before:content-['7.1'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Обработка персональных данных осуществляется с
								согласия субъекта персональных данных на
								обработку его персональных данных
							</div>
							<div className="before:content-['7.2'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Обработка персональных данных необходима для
								достижения целей, предусмотренных международным
								договором Российской Федерации или законом, для
								осуществления возложенных законодательством
								Российской Федерации на оператора функций,
								полномочий и обязанностей.
							</div>
							<div className="before:content-['7.3'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Обработка персональных данных необходима для
								осуществления правосудия, исполнения судебного
								акта, акта другого органа или должностного лица,
								подлежащих исполнению в соответствии с
								законодательством Российской Федерации об
								исполнительном производстве.
							</div>
							<div className="before:content-['7.4'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Обработка персональных данных необходима для
								исполнения договора, стороной которого либо
								выгодоприобретателем или поручителем по которому
								является субъект персональных данных, а также
								для заключения договора по инициативе субъекта
								персональных данных или договора, по которому
								субъект персональных данных будет являться
								выгодоприобретателем или поручителем.
							</div>
							<div className="before:content-['7.5'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Обработка персональных данных необходима для
								осуществления прав и законных интересов
								оператора или третьих лиц либо для достижения
								общественно значимых целей при условии, что при
								этом не нарушаются права и свободы субъекта
								персональных данных.
							</div>
							<div className="before:content-['7.6'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Осуществляется обработка персональных данных,
								доступ неограниченного круга лиц к которым
								предоставлен субъектом персональных данных либо
								по его просьбе (далее — общедоступные
								персональные данные).
							</div>
							<div className="before:content-['7.7'] mb-[32rem] lg:mb-[48rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Осуществляется обработка персональных данных,
								подлежащих опубликованию или обязательному
								раскрытию в соответствии с федеральным законом.
							</div>
						</div>
						<div className="ml-[28rem] lg:ml-[34rem] font-bodyalt font-[600] text-[22rem] text-[#16191c] leading-[26rem] mb-[20rem] lg:text-[32rem] lg:leading-[37rem] lg:mb-[24rem]  before:content-['8.'] before:absolute before:-translate-x-[28rem] lg:before:-translate-x-[34rem]">
							Порядок сбора, хранения, передачи и других видов
							обработки персональных данных
						</div>
						<div className=" lg:ml-[34rem] font-body font-[400] text-[14rem] text-[#686868] leading-[21rem] mb-[8rem] lg:text-[20rem] lg:leading-[34rem] lg:mb-[16rem]">
							Безопасность персональных данных, которые
							обрабатываются Оператором, обеспечивается путем
							реализации правовых, организационных и технических
							мер, необходимых для выполнения в полном объеме
							требований действующего законодательства в области
							защиты персональных данных.
						</div>
						<div className="ml-[33rem] lg:ml-[86rem] font-body font-[400] text-[14rem] text-[#686868] leading-[21rem] mb-[8rem] lg:text-[20rem] lg:leading-[34rem] lg:mb-[16rem]">
							<div className="before:content-['8.1.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Оператор обеспечивает сохранность персональных
								данных и принимает все возможные меры,
								исключающие доступ к персональным данным
								неуполномоченных лиц.
							</div>
							<div className="before:content-['8.2.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Персональные данные Пользователя никогда, ни при
								каких условиях не будут переданы третьим лицам,
								за исключением случаев, связанных с исполнением
								действующего законодательства либо в случае,
								если субъектом персональных данных дано согласие
								Оператору на передачу данных третьему лицу для
								исполнения обязательств по гражданско-правовому
								договору.
							</div>
							<div className="before:content-['8.3.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								В случае выявления неточностей в персональных
								данных, Пользователь может актуализировать их
								самостоятельно, путем направления Оператору
								уведомление на адрес электронной почты Оператора
								privacy@fitnesskaknauka.ru с пометкой
								«Актуализация персональных данных».
							</div>
							<div className="before:content-['8.4.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Срок обработки персональных данных определяется
								достижением целей, для которых были собраны
								персональные данные, если иной срок не
								предусмотрен договором или действующим
								законодательством. Пользователь может в любой
								момент отозвать свое согласие на обработку
								персональных данных, направив Оператору
								уведомление посредством электронной почты на
								электронный адрес Оператора
								privacy@fitnesskaknauka.ru с пометкой «Отзыв
								согласия на обработку персональных данных».
							</div>
							<div className="before:content-['8.5.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Вся информация, которая собирается сторонними
								сервисами, в том числе платежными системами,
								средствами связи и другими поставщиками услуг,
								хранится и обрабатывается указанными лицами
								(Операторами) в соответствии с их
								Пользовательским соглашением и Политикой
								конфиденциальности. Субъект персональных данных
								и/или с указанными документами. Оператор не
								несет ответственность за действия третьих лиц, в
								том числе указанных в настоящем пункте
								поставщиков услуг.
							</div>
							<div className="before:content-['8.6.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Установленные субъектом персональных данных
								запреты на передачу (кроме предоставления
								доступа), а также на обработку или условия
								обработки (кроме получения доступа) персональных
								данных, разрешенных для распространения, не
								действуют в случаях обработки персональных
								данных в государственных, общественных и иных
								публичных интересах, определенных
								законодательством РФ.
							</div>
							<div className="before:content-['8.7.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Оператор при обработке персональных данных
								обеспечивает конфиденциальность персональных
								данных.
							</div>
							<div className="before:content-['8.8.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Оператор осуществляет хранение персональных
								данных в форме, позволяющей определить субъекта
								персональных данных, не дольше, чем этого
								требуют цели обработки персональных данных, если
								срок хранения персональных данных не установлен
								федеральным законом, договором, стороной
								которого, выгодоприобретателем или поручителем
								по которому является субъект персональных
								данных.
							</div>
							<div className="before:content-['8.9.'] mb-[32rem] lg:mb-[48rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Условием прекращения обработки персональных
								данных может являться достижение целей обработки
								персональных данных, истечение срока действия
								согласия субъекта персональных данных, отзыв
								согласия субъектом персональных данных или
								требование о прекращении обработки персональных
								данных, а также выявление неправомерной
								обработки персональных данных.
							</div>
						</div>
						<div className="ml-[28rem] lg:ml-[34rem] font-bodyalt font-[600] text-[22rem] text-[#16191c] leading-[26rem] mb-[20rem] lg:text-[32rem] lg:leading-[37rem] lg:mb-[24rem]  before:content-['9.'] before:absolute before:-translate-x-[28rem] lg:before:-translate-x-[34rem]">
							Перечень действий, производимых Оператором с
							полученными персональными данными
						</div>
						<div className="ml-[33rem] lg:ml-[86rem] font-body font-[400] text-[14rem] text-[#686868] leading-[21rem] mb-[8rem] lg:text-[20rem] lg:leading-[34rem] lg:mb-[16rem]">
							<div className="before:content-['9.1.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Оператор осуществляет сбор, запись,
								систематизацию, накопление, хранение, уточнение
								(обновление, изменение), извлечение,
								использование, передачу (распространение,
								предоставление, доступ), обезличивание,
								блокирование, удаление и уничтожение
								персональных данных.
							</div>
							<div className="before:content-['9.2.'] mb-[32rem] lg:mb-[48rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Оператор осуществляет автоматизированную
								обработку персональных данных с получением и/или
								передачей полученной информации по
								информационно-телекоммуникационным сетям или без
								таковой.
							</div>
						</div>
						<div className="ml-[28rem] lg:ml-[50rem] font-bodyalt font-[600] text-[22rem] text-[#16191c] leading-[26rem] mb-[20rem] lg:text-[32rem] lg:leading-[37rem] lg:mb-[24rem]  before:content-['10.'] before:absolute before:-translate-x-[28rem] lg:before:-translate-x-[50rem]">
							Трансграничная передача персональных данных
						</div>
						<div className="ml-[33rem] lg:ml-[86rem] font-body font-[400] text-[14rem] text-[#686868] leading-[21rem] mb-[8rem] lg:text-[20rem] lg:leading-[34rem] lg:mb-[16rem]">
							<div className="before:content-['10.1.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Оператор до начала осуществления деятельности по
								трансграничной передаче персональных данных
								обязан уведомить уполномоченный орган по защите
								прав субъектов персональных данных о своем
								намерении осуществлять трансграничную передачу
								персональных данных (такое уведомление
								направляется отдельно от уведомления о намерении
								осуществлять обработку персональных данных).
							</div>
							<div className="before:content-['10.2.'] mb-[32rem] lg:mb-[48rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Оператор до подачи вышеуказанного уведомления,
								обязан получить от органов власти иностранного
								государства, иностранных физических лиц,
								иностранных юридических лиц, которым планируется
								трансграничная передача персональных данных,
								соответствующие сведения.
							</div>
						</div>
						<div className="ml-[28rem] lg:ml-[50rem] font-bodyalt font-[600] text-[22rem] text-[#16191c] leading-[26rem] mb-[20rem] lg:text-[32rem] lg:leading-[37rem] lg:mb-[24rem]  before:content-['11.'] before:absolute before:-translate-x-[28rem] lg:before:-translate-x-[50rem]">
							Конфиденциальность персональных данных
						</div>
						<div className="lg:ml-[34rem] font-body font-[400] text-[14rem] text-[#686868] leading-[21rem] mb-[32rem] lg:text-[20rem] lg:leading-[34rem] lg:mb-[48rem]">
							Оператор и иные лица, получившие доступ к
							персональным данным, обязаны не раскрывать третьим
							лицам и не распространять персональные данные без
							согласия субъекта персональных данных, если иное не
							предусмотрено федеральным законом.
						</div>
						<div className="ml-[28rem] lg:ml-[50rem] font-bodyalt font-[600] text-[22rem] text-[#16191c] leading-[26rem] mb-[20rem] lg:text-[32rem] lg:leading-[37rem] lg:mb-[24rem]  before:content-['12.'] before:absolute before:-translate-x-[28rem] lg:before:-translate-x-[50rem]">
							Заключительные положения
						</div>
						<div className="ml-[33rem] lg:ml-[86rem] font-body font-[400] text-[14rem] text-[#686868] leading-[21rem] mb-[100rem] lg:text-[20rem] lg:leading-[34rem] lg:mb-[160rem]">
							<div className="before:content-['12.1.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Пользователь может получить любые разъяснения по
								интересующим вопросам, касающимся обработки его
								персональных данных, обратившись к Оператору с
								помощью электронной почты{' '}
								<span className="text-[#FFB700] underline">{` privacy@fitnesskaknauka.ru`}</span>
								.
							</div>
							<div className="before:content-['12.2.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								В данном документе будут отражены любые
								изменения политики обработки персональных данных
								Оператором. Политика действует бессрочно до
								замены ее новой версией.
							</div>
							<div className="before:content-['12.3.'] mb-[8rem] lg:mb-[16rem] before:absolute before:-translate-x-[33rem] lg:before:-translate-x-[52rem]">
								Актуальная версия Политики в свободном доступе
								расположена в сети Интернет по адресу
								<a
									href="https://fitnesskaknauka.ru"
									className="text-[#FFB700] underline"
								>{` https://fitnesskaknauka.ru`}</a>
								.
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default PrivacyPolicy
