import React from 'react'
import '../App.css'
import News from './News'
import Rate from './Rate'
import Subject from './Subject'
import Search from './Search'
import Media from './Media'
import SearchCaption from './SearchCaption'
import SearchField from './SearchField'
import Advertisement from './Advertisement'
import Weather from './Weather'
import Interests from './Interests'
import Interest from './Interest'
import Maps from './Maps'
import TV from './TV'
import NowInTV from './NowInTV'
import Broadcast from './Broadcast'
import NowInBroadcast from './NowInBroadcast'
import Themes from './Themes'
import TopBlock from './TopBlock'
import LearnAbout from './LearnAbout'
import Label from './Label'
import MainBlockLabel from './MainBlockLabel'
import MainBlock from './MainBlock'


const Decomposition = () => {

  return (
    <>
      <TopBlock>
        <Media mainTitle='Сейчас в СМИ ' title='в Германии ' recomends='Рекомендуем ' date='31 июля, среда 02:32'>
          <News imgSrc='/#/react' imgAlt='icon' text='Путин упростил получение автомобильных номеров'/>
          <News imgSrc='/#/react' imgAlt='icon' text='В команде Зеленского раскрыли план реформ на Украине'/>
          <News imgSrc='/#/react' imgAlt='icon' text='`Турпомощь` прокомментировала гибель десятков россиян в Анталье'/>
          <News imgSrc='/#/react' imgAlt='icon' text='Суд закрыл дело Демпартии США против России'/>
          <News imgSrc='/#/react' imgAlt='icon' text='На Украине призвали создать ракеты для удара по Москве'/>
        <div>
          <Rate currency='USD MOEX' index='63,52' increment='+0,09'/>
          <Rate currency='EUR MOEX' index='70,86' increment='+0,14'/>
          <Rate currency='НЕФТЬ' index='64,90' increment='+1,63%'/>
          <span> ...</span>
        </div>
        </Media>
        <LearnAbout imgSrc='/#/react' imgAlt='icon' title='Работа над ошибками' text='Смотрите на Яндексе и запоминайте'/>
      </TopBlock>

      <MainBlockLabel>

        <Label imgSrc='/#/react' imgAlt='ЯНДЕКС'/>
        
        <MainBlock>
          <Search>
            <div>
              <Subject text='Видео '/>
              <Subject text='Картинки '/>
              <Subject text='Новости '/>
              <Subject text='Карты '/>
              <Subject text='Маркет '/>
              <Subject text='Переводчик '/>
              <Subject text='Эфир '/>
              <Subject text='ещё '/>
            </div>
            <SearchField/>
            <SearchCaption text='фаза луны сегодня'/>
          </Search>
      
          <Advertisement imgSrc='/#/react' imgAlt='ФОРСАЖ'/>
      
          <Themes>
            <Weather imgSrc='/#/react' imgAlt='icon' t='+17' morning='+17' day='+20'/>
            <Maps topic='Карта Германии' text='Расписания'/>
            <Broadcast text='Эфир'>
              <NowInBroadcast imgSrc='/#/react' imgAlt='icon' text='Управление как искусство' channel='Успех'/>
              <NowInBroadcast imgSrc='/#/react' imgAlt='icon' text='Ночь. Мир в это время' channel='earthTV'/>
              <NowInBroadcast imgSrc='/#/react' imgAlt='icon' text='Андрей Возн...' channel='Совершенно секретно'/>
            </Broadcast>
            <Interests text='Посещаемое'>
              <Interest topic='Недвижимость' text=' - о сталинках'/>
              <Interest topic='Маркет' text=' - люстры и светильники'/>
              <Interest topic='Недвижимость' text=' - привод 4х4 до 500 000'/>
            </Interests>
            <TV text='Телепрограмма' imgSrc='/#/react' imgAlt='icon'>
              <NowInTV time='02:00 ' text='ТНТ. Best ' channel='ТНТ International'/>
              <NowInTV time='02:15 ' text='Джинглики ' channel='Карусель INT'/>
              <NowInTV time='02:25 ' text='Наедине со всеми ' channel='Первый'/>
            </TV>
          </Themes>   
        </MainBlock>
      </MainBlockLabel>
    </>
  )
}

Decomposition.propTypes = {}

export default Decomposition
