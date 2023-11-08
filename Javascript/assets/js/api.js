
async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/PedroHenriqueBS/DesafiosDIO/main/Javascript/data/profile.json';
    const fetching = await fetch(url);
    return await fetching.json();
}