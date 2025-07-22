// Page5.tsx
import './Page5.scss';
import { useAnswers } from '../../context/AnswersContext';

export const Page5 = () => {
  const { diagnosis } = useAnswers();

  const getAlertMessage = () => {
    switch (diagnosis) {
      case 'депресія':
        return 'У тебе глибокий депресивний синдром!\nЗв’яжись з ним терміново! Інакше може бути пізно.';
      case 'тривога':
        return 'У тебе глибокий тривожний синдром!\nЗв’яжись з ним терміново! Інакше може бути пізно.';
      case 'синдром':
        return 'У тебе глибокий тривожно-депресивний синдром!\nЗв’яжись з ним терміново! Інакше може бути пізно.';
      case 'птср':
        return 'У тебе яскраво виражений ПТСР!\nЗв’яжись з ним терміново! Інакше може бути пізно.';
      case 'суїцид':
        return 'У тебе високий ризик суїциду!\nЗв’яжись з ним терміново! Інакше може бути пізно.';
      default:
        return '';
    }
  };

  const alertMessage = getAlertMessage();

  return (
    <div className="page5">
      <div className="page1-content">
        <div className="content-box1">
          <div className="content-box-danger">
            {alertMessage && (
              <div className="alert-box red title-text-danger">
                {alertMessage.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            )}
          </div>

          <div className="psycholog">
            <h3>((Для редагування!!! Інформація та персонаж вигадані))</h3>
          </div>

          <div className="psychologist-block">
            <div className="psychologist-photo">
              <div className="photo-placeholder">
                <img
                  src={`${import.meta.env.BASE_URL}img/logo/1.png`}
                  alt="Фото лікаря"
                  className="pageNotFound"
                />
              </div>
            </div>

            <div className="psychologist-info">
              <h3 className="title-text">Лікар-психіатр, психотерапевт, кандидат медичних наук</h3>
              <h3>Карлос Богданович Кастанєда</h3>

              <div className="footer__contact contact-row">
                <h3>ТЕЛЕФОН:</h3>
                <a href="tel:+380400000000">+38 (040) 00 000 00</a>
              </div>

              <div className="footer__telegram contact-row">
                <h3>TELEGRAM:</h3>
                <a href="https://t.me/jjjj">@bla_bla_bla</a>
              </div>
            </div>
          </div>

          <div className="psychologist-text">
            <section>
              <h3>Класифікація спеціалізації:</h3>
              <ul>
                <li>Психіатрія (клінічна)</li>
                <li>Медична психологія</li>
                <li>Психотерапія (когнітивно-поведінкова, гештальт, екзистенційна)</li>
                <li>Реабілітація учасників бойових дій та посттравматичних станів (ПТСР)</li>
              </ul>

              <h3>Освіта:</h3>
              <ul>
                <li>
                  <strong>Медичний університет імені П. Х. Андерсона (Іспанія)</strong> — факультет
                  психіатрії
                </li>
                <li>
                  <strong>Київський інститут психотерапії</strong> — спеціалізація з клінічної
                  психології
                </li>
                <li>
                  Курси підвищення кваліфікації у Віденській школі нейропсихіатрії та Гарвардській
                  школі медицини (онлайн)
                </li>
              </ul>

              <h3>Професійний досвід:</h3>
              <ul>
                <li>
                  Понад 20 років клінічної практики у сфері психіатрії та кризової інтервенції
                </li>
                <li>Експерт із супроводу ветеранів, постраждалих від воєнних конфліктів</li>
                <li>
                  Колишній завідувач відділення кризової психіатрії у Міжнародному центрі
                  ментального здоров’я (Барселона)
                </li>
                <li>
                  Консультант міжнародних місій «Лікарі без кордонів» (Doctors Without Borders)
                </li>
              </ul>

              <h3>Заслуги та наукові досягнення:</h3>
              <ul>
                <li>
                  Автор понад 40 наукових публікацій з питань тривожних розладів, депресії та ПТСР
                </li>
                <li>
                  Розробник власного методу поетапної стабілізації психіки у ветеранів бойових дій
                </li>
                <li>
                  Нагороджений відзнакою «За відданість пацієнтам» (Міжнародна асоціація психіатрів,
                  2021 р.)
                </li>
                <li>
                  Постійний учасник конференцій з ментального здоров’я (Женева, Торонто, Львів)
                </li>
                <li>Учасник робочої групи МОЗ з реформи психіатричної допомоги в Україні</li>
              </ul>

              <h3>Професійне кредо:</h3>
              <p>
                Карлос Богданович дотримується гуманістичного підходу до лікування, орієнтуючись на
                комплексну допомогу — медикаментозну, психотерапевтичну та соціальну. Вірить, що
                стабільність — це не відсутність проблем, а навичка проживати їх усвідомлено.
              </p>
            </section>
          </div>

          <div className="photo-grid">
            {[2, 3, 4, 5].map((n) => (
              <div className="photo-placeholder" key={n}>
                <img
                  src={`${import.meta.env.BASE_URL}img/logo/${n}.png`}
                  alt={`Фото ${n}`}
                  className="pageNotFound"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
