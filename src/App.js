import React,{useState} from 'react';
import Accordion from './components/accordion';
import Search from './components/search';
import Dropdown from './components/dropdown';
import Translate from './components/translate'
import Route from './components/route';
import Header from './components/header';


const items =[
	{
	title:'React',
	content: "It's fun to use it"
	},
	{
	title:'React is cool?',
	content: "It's cool to use it"
	},
	{
	title:'React is difficult?',
	content: "It's easy to use learn"
	}
];

const options = [
	{
		label: 'Color Blue',
		value: 'Blue'
	},
	{
		label: 'Color Red',
		value: 'Red'
	},
	{
		label: 'Color Green',
		value: 'Green'
	}
];

export default () =>{

	const [selected,setSelected] = useState(options[0]);
	//const [showDrop,setShowDrop] = useState(true);

	return(
		<div>
			<Header />
			<Route path='/'>
				<Accordion items={items} />
			</Route>
			<Route path='/list'>
				<Search />
			</Route>
			<Route path='/dropdown'>
				<Dropdown 
				label='Select a color' 
				selected={selected}
				onSelectedChanged={setSelected}
				options={options}/>
			</Route>
			<Route path='/translate'>
				<Translate />
			</Route>
		</div>
	);
};