import texts from "../config/texts"

const checkSecrets = (value: string) => {
  const secretsBag = ['bag', 'баг']
  const secretsPlanet = ['планета', 'planet', 'марс', 'mars']
  const secretsPracticum = ['когорта', '4', 'практикум']
  const secretsQa = ['qa', 'qc', 'тестирование', 'тестировщик']
  const secretsDoc = ['чеклист', 'чек-лист', 'чек лист', 'тест-кейс', 'тесткейс', 'тест кейс', 'check-list', 'check list', 'checklist', 'testcase', 'test-case', 'test case']

  if(secretsBag.includes(value.trim().toLowerCase())) {
    return texts.secrets.sBag
  }

  if(secretsPlanet.includes(value.trim().toLowerCase())) {
    return texts.secrets.sPlanet
  }
  
  if(secretsPracticum.includes(value.trim().toLowerCase())) {
    return texts.secrets.sPracticum
  }
  
  if(secretsQa.includes(value.trim().toLowerCase())) {
    return texts.secrets.sQa
  }

  if(secretsDoc.includes(value.trim().toLowerCase())) {
    return texts.secrets.sDoc
  }

  return null
}

export default checkSecrets