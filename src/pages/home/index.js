import React from 'react'
import { LinkStyled } from '../../components/link'
import { Settings } from "@emotion-icons/ionicons-solid/Settings"
import { FileEarmarkTextFill } from "@emotion-icons/bootstrap/FileEarmarkTextFill"
import styled from 'styled-components';
import { DocumentReport } from "@emotion-icons/heroicons-solid/DocumentReport"

const HomeParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 900px;
  gap:30px;
`

const ChartBox = styled.div`
  height: 270px !important;
  background: #ffffff 0 0 no-repeat padding-box !important;
  box-shadow: 0 0 10px #00000029 !important;
  border-radius: 5px !important;
  margin: 0 !important;
  width: 75% !important;
  border: 1px solid #E6E7E9;

`

const OptionBox = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const SettingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 36%;
  height: 400px;
  background: #ffffff 0 0 no-repeat padding-box !important;
  box-shadow: 0 0 10px #00000029 !important;
  border-radius: 5px !important;
  margin: 0 !important;

`

const FileBox = styled.div`
padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 26%;
  height: 400px;
  background: #ffffff 0 0 no-repeat padding-box !important;
  box-shadow: 0 0 10px #00000029 !important;
  border-radius: 5px !important;
  margin: 0 !important;

`

const ReportBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  gap: 15px;
  width: 26%;
  height: 400px;
  background: #ffffff 0 0 no-repeat padding-box !important;
  box-shadow: 0 0 10px #00000029 !important;
  border-radius: 5px !important;
  margin: 0 !important;
 
`

const TitleStyled = styled.div`
  width: 90%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

const SpanTitleStyled = styled.div`
  font-size: 15px;
  color: gray;
`

const SettingsStyled = styled(Settings)`
  color:  #7F96AC;
`

const FileEarmarkTextFillStyled = styled(FileEarmarkTextFill)`
  color:  #7F96AC
`

const DocumentReportStyled = styled(DocumentReport)`
  color:  #7F96AC
`



const Home = () => {
    return (
      <HomeParent>
        <ChartBox></ChartBox>
        <OptionBox>
          <SettingBox>
            <TitleStyled>
              <SettingsStyled size={24} />
              <SpanTitleStyled>??????????????</SpanTitleStyled>
            </TitleStyled>
            <LinkStyled to="/currency" >??????</LinkStyled>
            <LinkStyled to="/report-type" >?????? ??????????</LinkStyled>
            <LinkStyled to="/dims" >???????????? ????</LinkStyled>
            <LinkStyled to="/account-type" >?????? ????????</LinkStyled>
            <LinkStyled to="/ledger" >???????? ????????????????</LinkStyled>
            <LinkStyled to="/tax-conf" >?????????????? ????????????</LinkStyled>
            <LinkStyled to="/fiscal-year" >?????? ????????</LinkStyled>
            <LinkStyled to="/acc-conf-menu" >???????? ?????? ????????</LinkStyled>
            <LinkStyled to="/acc-dims" >?????????? ???????? ???????? ?? ????????????</LinkStyled>
            <LinkStyled to="/fin-accounts" >???????? ???????? ????????</LinkStyled>
            <LinkStyled to="/root-type" ></LinkStyled>
          </SettingBox>
          <FileBox>
            <TitleStyled>
              <FileEarmarkTextFillStyled size={24} />
              <SpanTitleStyled>??????????</SpanTitleStyled>
            </TitleStyled>
            <LinkStyled to="/acc-docs" >???????? ??????????</LinkStyled>
            <LinkStyled to="/acc-docs-rows" >???????? ??????????</LinkStyled>
          </FileBox>
          <ReportBox>
            <TitleStyled>
              <DocumentReportStyled size={30} />
              <SpanTitleStyled>??????????????</SpanTitleStyled>
            </TitleStyled>
            <LinkStyled to="/acc-input-menu" >?????????? ?????? ???????? </LinkStyled> 
            <LinkStyled to="/acc-output-menu" >?????????? ?????? ??????????????</LinkStyled>
          </ReportBox>
        </OptionBox>
      </HomeParent>
    );
};

export default Home