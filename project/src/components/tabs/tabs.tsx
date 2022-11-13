import { Tab } from '../../const';

type TabType = keyof typeof Tab;

type Props = {
  setActiveTab: React.Dispatch<React.SetStateAction<TabType>>;
  activeTab: TabType;
};

const Tabs = ({ setActiveTab, activeTab }: Props): JSX.Element => {
  const clickHandle = (evt: React.MouseEvent, tabName: TabType) => {
    evt.preventDefault();
    setActiveTab(tabName);
  };

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li
          className={
            activeTab === Tab.Overview ? 'film-nav__item film-nav__item--active' : 'film-nav__item'
          }
        >
          <a
            href="overview"
            className="film-nav__link"
            onClick={(evt) => clickHandle(evt, Tab.Overview)}
          >
            Overview
          </a>
        </li>
        <li
          className={
            activeTab === Tab.Details ? 'film-nav__item film-nav__item--active' : 'film-nav__item'
          }
        >
          <a
            href="details"
            className="film-nav__link"
            onClick={(evt) => clickHandle(evt, Tab.Details)}
          >
            Details
          </a>
        </li>
        <li
          className={
            activeTab === Tab.Reviews ? 'film-nav__item film-nav__item--active' : 'film-nav__item'
          }
        >
          <a
            href="reviews"
            className="film-nav__link"
            onClick={(evt) => clickHandle(evt, Tab.Reviews)}
          >
            Reviews
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Tabs;
