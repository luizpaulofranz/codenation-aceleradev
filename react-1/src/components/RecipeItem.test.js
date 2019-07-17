import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import RecipeItem from './RecipeItem';

describe('RecipeItem', () => {
    test('Should be RecipeItem', () => {
        const wrapper = mount(
            <MemoryRouter>
                <RecipeItem recipe={mock} />
            </MemoryRouter>
        );
        expect(wrapper.exists('RecipeItem')).toBeTruthy();
    })
})

const mock = {
    "title": "Ginger Champagne",
    "href": "http:\/\/allrecipes.com\/Recipe\/Ginger-Champagne\/Detail.aspx",
    "ingredients": "champagne, ginger, ice, vodka",
    "thumbnail": "http:\/\/img.recipepuppy.com\/1.jpg"
}
