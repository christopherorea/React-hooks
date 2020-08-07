import React,{useState,useEffect} from 'react';
import axios from 'axios';

const GoogleKey = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({language,text})=>{

	const [translated,setTranslated] = useState('');

	useEffect(()=>{
		const translate= async()=>{
			const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{
			},
			{
				params:{
					q:text,
					target : language.value,
					key: GoogleKey
				}
			});

			setTranslated(data.data.translations[0].translatedText);
		};

		const timer= setTimeout(()=>{
        if(text){
          translate();
        }
      },1000);

      return(()=>{
        clearTimeout(timer);
      });

		translate();
	},[language,text]);

	return(
		<div>
			<h4>
				{translated}
			</h4>
		</div>
	);
};

export default Convert;