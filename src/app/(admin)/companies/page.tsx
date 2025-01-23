
import React from 'react';
import Header from '../../components/header';
import Toolbar from '../../components/toolbar';
import AddCompanyButton from '../../components/add-company-button';
import SearchInput from '../../components/search-input';
import CompanyTable from '../../components/company-table';
import CompanyRow from '../../components/company-row';
import { Status } from '../../components/status-label';

export interface PageProps{

}
export default function Page({}: PageProps) {
   
  return (
<>

<Header>Companies</Header>
<Toolbar action={<AddCompanyButton></AddCompanyButton>}>
<SearchInput></SearchInput>
</Toolbar>
<CompanyTable>

    <CompanyRow id={1} category={"Products"} status={Status.Pending} promotion={true} country={'USA'} joinedDate={"02.19.2023"} company={"AC"}></CompanyRow>
</CompanyTable>
</>
  );
}