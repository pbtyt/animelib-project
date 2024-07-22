import React from 'react';
import FilterCheckbox from '../../ui/FilterCheckbox/FilterCheckbox';
import FilterSection from '../../ui/FilterSection/FilterSection';
import Input from '../../ui/Input/Input';
import styles from './Filter.module.css';

import { Dices } from 'lucide-react';
import Button from '../../ui/Button/Button';

const Filter = () => {
	return (
		<div className={styles.filterWrapper}>
			<div className={styles.scroll}>
				<FilterSection sectionTitle='Жанры' />
				<FilterSection sectionTitle='Теги' />

				<span className={styles.title}>Количество эпизодов</span>
				<div className={styles.epQ}>
					<Input
						type='number'
						inputmode='numeric'
						placeholder='От'
						minValue='0'
						additionalStyles={{ padding: '4.7px' }}
					/>
					<span className={styles.dash}>—</span>
					<Input
						type='number'
						inputmode='numeric'
						placeholder='До'
						minValue='0'
						additionalStyles={{ padding: '4.7px' }}
					/>
				</div>

				<span className={styles.title}>Год релиза</span>
				<div className={styles.epQ}>
					<Input
						type='number'
						inputmode='numeric'
						placeholder='От'
						minValue='1930'
						additionalStyles={{ padding: '4.7px' }}
					/>
					<span className={styles.dash}>—</span>
					<Input
						type='number'
						inputmode='numeric'
						placeholder='До'
						minValue='1930'
						additionalStyles={{ padding: '4.7px' }}
					/>
				</div>

				<span className={styles.title}>Оценка</span>
				<div className={styles.epQ}>
					<Input
						type='number'
						inputmode='numeric'
						placeholder='От'
						minValue='0'
						maxValue='10'
						additionalStyles={{ padding: '4.7px' }}
					/>
					<span className={styles.dash}>—</span>
					<Input
						type='number'
						inputmode='numeric'
						placeholder='До'
						minValue='0'
						maxValue='10'
						additionalStyles={{ padding: '4.7px' }}
					/>
				</div>

				<span className={styles.title}>Количество оценок</span>
				<div className={styles.epQ}>
					<Input
						type='number'
						inputmode='numeric'
						placeholder='От'
						minValue='0'
						additionalStyles={{ padding: '4.7px' }}
					/>
					<span className={styles.dash}>—</span>
					<Input
						type='number'
						inputmode='numeric'
						placeholder='До'
						minValue='0'
						additionalStyles={{ padding: '4.7px' }}
					/>
				</div>

				<span className={styles.title}>Тип</span>
				<div className={styles.fCheckboxes}>
					<FilterCheckbox checkboxText='TV Сериал' />
					<FilterCheckbox checkboxText='Фильм' />
				</div>

				<span className={styles.title}>Статус тайтла</span>
				<div className={styles.fCheckboxes}>
					<FilterCheckbox checkboxText='Онгоинг' />
					<FilterCheckbox checkboxText='Завершён' />
					<FilterCheckbox checkboxText='Анонс' />
				</div>
			</div>

			<div className={styles.filterFooter}>
				<Button
					styleIndex={0}
					additionalStyles={{
						flexGrow: '1',
						backgroundColor: 'transparent',
						fontSize: '100%',
						padding: '0 18px',
					}}
				>
					<span>Сбросить</span>
				</Button>

				<Button
					styleIndex={0}
					additionalStyles={{
						flexGrow: '1',
						backgroundColor: '#5e35b1',
						fontSize: '100%',
						color: 'white',
						padding: '0 18px',
					}}
				>
					<span>Применить</span>
				</Button>

				<Button styleIndex={0} additionalStyles={{ padding: '4px' }}>
					<Dices size={22} color='#bfbfbf' strokeWidth={1} />
				</Button>
			</div>
		</div>
	);
};

export default Filter;
