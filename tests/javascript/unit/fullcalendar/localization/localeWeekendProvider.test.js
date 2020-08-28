/**
 * @copyright Copyright (c) 2020 Georg Ehrke
 *
 * @author Georg Ehrke <oc.list@georgehrke.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import {getWeekendDaysForLocale} from "../../../../../src/fullcalendar/localization/localeWeekendProvider.js";

describe('fullcalendar/localeWeekendProvider test suite', () => {

	it('should provide the correct weekend days for the us', () => {
		expect(getWeekendDaysForLocale('en')).toEqual([0, 6])
		expect(getWeekendDaysForLocale('en_US')).toEqual([0, 6])
	})

	it('should provide the correct weekend days for hebrew locale', () => {
		expect(getWeekendDaysForLocale('he')).toEqual([5, 6])
		expect(getWeekendDaysForLocale('he_IL')).toEqual([5, 6])
	})
})