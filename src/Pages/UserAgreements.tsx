import React, { useLayoutEffect } from 'react'
import { Header } from '../layouts/Header';
import { Footer } from '../layouts/Footer'

function UserAgreements() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  },[])
  return (
    <>
      <div className='lg:w-[1920rem]'>
        <div className='mx-[16rem] lg:mx-[120rem] overflow-hidden'>
          <Header/>
          <div className='lg:mr-[450rem]'>
            <div className='font-body font-[600] text-[35rem] mb-[15rem] lg:text-[64rem] lg:leading-[75rem] text-[#1F2117] lg:mb-[64rem]'>
                Пользовательское Соглашение
            </div>
            <div className='font-bodyalt font-[400] text-[16rem] mb-[15rem] text-[16rem] lg:text-[20rem] lg:leading-[34rem] text-[#777872] lg:mb-[21rem] lg:tracking-[0.03em]'>
                Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует отношения между владельцем ООО "МИДО" ИНН 6141058830 КПП 614101001 в лице Генерального директора Лапшина Владислава Владимировича (далее или Администрация) с одной стороны и пользователем мобильного приложения с другой.
                Мобильное приложение не является средством массовой информации.
            </div>
            <div className='font-bodyalt font-[600] text-[18rem] mb-[4rem] lg:text-[22rem] lg:leading-[32rem] text-[#1F2117] lg:mb-[4rem] lg:tracking-[0.05em]'>
              Используя мобильное приложение, Вы соглашаетесь с условиями данного соглашения.
            </div>
            <div className='font-bodyalt font-[600] text-[18rem] mb-[40rem] lg:text-[22rem] lg:leading-[32rem] text-[#1F2117] lg:mb-[64rem] lg:tracking-[0.05em]'>
              Если Вы не согласны с условиями данного соглашения, не используйте мобильное приложение!
            </div>
            <div className='font-body font-[600] text-[24rem] lg:text-[40rem] lg:leading-[47rem] text-[#1F2117] mb-[24rem] lg:mb-[48rem]'>
              Права и обязанности сторон
            </div>
            <div className='mb-[24rem] lg:mb-[48rem]'>
              <div className='font-body font-[600] text-[20rem] lg:text-[32rem] lg:leading-[37rem] text-[#1F2117] mb-[8rem] lg:mb-[24rem]'>
                Пользователь имеет право:
              </div>
              <ol type='1' className='font-bodyalt font-[400] text-[16rem] lg:text-[20rem] lg:leading-[34rem] text-[#777872] mb-[24rem] lg:mb-[48rem] lg:tracking-[0.05em]'>
                <li>1. осуществлять поиск информации в мобильном приложении</li>
                <li>2. получать информацию в мобильном приложении</li>
                <li>3. публиковать информацию о себе</li>
                <li>4. распространять информацию в мобильном приложении</li>
                <li>5. комментировать контент, выложенный внутри мобильного приложения</li>
                <li>6. требовать от администрации скрытия любой информации о пользователе</li>
                <li>7. требовать от администрации скрытия любой информации переданной пользователем мобильному приложению</li>
                <li>8. использовать информацию опублиованную в мобильном приложении в личных некоммерческих целях</li>
              </ol>
            </div>
            <div className='mb-[24rem] lg:mb-[48rem]'>
              <div className='font-body font-[600] text-[20rem] lg:text-[32rem] lg:leading-[37rem] text-[#1F2117] mb-[8rem] lg:mb-[24rem]'>
                Администрация имеет право:
              </div>
              <ol type='1' className='font-bodyalt font-[400] text-[16rem] lg:text-[20rem] lg:leading-[34rem] text-[#777872] mb-[24rem] lg:mb-[48rem] lg:tracking-[0.05em]'>
                <li>1. по своему усмотрению и необходимости создавать, изменять, отменять правила</li>
                <li>2. ограничивать доступ к любой информации в мобильном приложении</li>
                <li>3. создавать, изменять, удалять информацию</li>
                <li>4. удалять учетные записи</li>
                <li>5. отказывать в регистрации без объяснения причин</li>
              </ol>
            </div>
            <div className='mb-[24rem] lg:mb-[48rem]'>
              <div className='font-body font-[600] text-[20rem] lg:text-[32rem] lg:leading-[37rem] text-[#1F2117] mb-[8rem] lg:mb-[24rem]'>
              Пользователь обязуется:
              </div>
              <ol type='1' className='font-bodyalt font-[400] text-[16rem] lg:text-[20rem] lg:leading-[34rem] text-[#777872] mb-[24rem] lg:mb-[48rem] lg:tracking-[0.05em]'>
                <li>1. обеспечить достоверность предоставляемой информации</li>
                <li>2. обеспечивать сохранность личных данных от доступа третьих лиц</li>
                <li>3. обновлять Персональные данные, предоставленные при регистрации, в случае их изменения</li>
                <li>4. не копировать информацию с других источников</li>
                <li>5. не копировать информацию на другие ресурсы, даже с указанием источника данного мобильного приложения</li>
                <li>6. не распространять информацию, которая направлена на пропаганду войны, разжигание национальной, расовой или религиозной ненависти и вражды, а также иной информации, за распространение которой предусмотрена уголовная или административная ответственность</li>
                <li>7. не нарушать работоспособность мобильного приложения</li>
                <li>8. не создавать несколько учётных записей в мобильном приложении, если фактически они принадлежат одному и тому же лицу</li>
                <li>9. не совершать действия, направленные на введение других Пользователей в заблуждение</li>
                <li>10. не регистрировать учетную запись от имени или вместо другого лица за исключением случаев, предусмотренных законодательством РФ</li>
                <li>11. не размещать материалы рекламного, эротического, порнографического или оскорбительного характера, а также иную информацию, размещение которой запрещено или противоречит нормам действующего законодательства РФ</li>
                <li>12. не использовать скрипты (программы) для автоматизированного сбора информации и/или взаимодействия мобильным приложением и его Сервисами</li>
              </ol>
            </div>
            <div className='mb-[24rem] lg:mb-[48rem]'>
              <div className='font-body font-[600] text-[20rem] lg:text-[32rem] lg:leading-[37rem] text-[#1F2117] mb-[8rem] lg:mb-[24rem]'>
                Администрация обязуется:
              </div>
              <ol type='1' className='font-bodyalt font-[400] text-[16rem] lg:text-[20rem] lg:leading-[34rem] text-[#777872] mb-[24rem] lg:mb-[48rem] lg:tracking-[0.05em]'>
                <li>1. поддерживать работоспособность мобильного приложения за исключением случаев, когда это невозможно по независящим от Администрации причинам.</li>
                <li>2. осуществлять разностороннюю защиту учетной записи Пользователя</li>
                <li>3. защищать информацию, распространение которой ограничено или запрещено законами путем вынесения предупреждения либо удалением учетной записи пользователя, нарушившего правила</li>
                <li>4. предоставить всю доступную информацию о Пользователе уполномоченным на то органам государственной власти в случаях, установленных законом</li>
              </ol>
            </div>
            <div className='mb-[24rem] lg:mb-[48rem]'>
              <div className='font-body font-[600] text-[20rem] lg:text-[32rem] lg:leading-[37rem] text-[#1F2117] mb-[8rem] lg:mb-[24rem]'>
              Ответственность сторон
              </div>
              <ol type='1' className='font-bodyalt font-[400] text-[16rem] lg:text-[20rem] lg:leading-[34rem] text-[#777872] mb-[24rem] lg:mb-[48rem] lg:tracking-[0.05em]'>
                <li>1. поддерживать работоспособность мобильного приложения за исключением случаев, когда это невозможно по независящим от Администрации причинам.</li>
                <li>2. осуществлять разностороннюю защиту учетной записи Пользователя</li>
                <li>3. пользователь лично несет полную ответственность за распространяемую им информацию</li>
                <li>4. администрация не несет никакой ответственности за достоверность информации, скопированной из других источников</li>
                <li>5. администрация не несёт ответственность за несовпадение ожидаемых Пользователем и реально полученных услуг</li>
                <li>6. администрация не несет никакой ответственности за услуги, предоставляемые третьими лицами</li>
                <li>7. в случае возникновения форс-мажорной ситуации (боевые действия, чрезвычайное положение, стихийное бедствие и т. д.) Администрация не гарантирует сохранность информации, размещённой Пользователем, а также бесперебойную работу информационного ресурса</li>
                <li>8. предоставить всю доступную информацию о Пользователе уполномоченным на то органам государственной власти в случаях, установленных законом</li>
              </ol>
            </div>
            <div className='mb-[24rem] lg:mb-[48rem]'>
              <div className='font-body font-[600] text-[20rem] lg:text-[32rem] lg:leading-[37rem] text-[#1F2117] mb-[8rem] lg:mb-[24rem]'>
              Условия действия Соглашения
              </div>
              <ol className='font-bodyalt font-[400] text-[16rem] lg:text-[20rem] lg:leading-[34rem] text-[#777872] mb-[24rem] lg:mb-[48rem] lg:tracking-[0.05em]'>
                <li>Данное Соглашение вступает в силу при регистрации в мобильном приложении. Соглашение перестает действовать при появлении его новой версии.</li>
                <li>Администрация оставляет за собой право в одностороннем порядке изменять данное соглашение по своему усмотрению.</li>
                <li>При изменении соглашения, в некоторых случаях, администрация может оповестить пользователей удобным для нее способом.</li>
              </ol>
            </div>
            <div className='flex flex-row justify-between mb-[50rem] lg:mb-[150rem] font-bodyalt font-[400] text-[16rem] lg:text-[20rem] lg:leading-[34rem] text-[#1F2117] mb-[24rem] lg:mb-[48rem] lg:tracking-[0.05em]'>
              <div>29.01.2023</div>
              <div>Лапшин В.В.</div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default UserAgreements;