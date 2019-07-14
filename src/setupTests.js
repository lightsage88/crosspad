import { configure } from 'enzyme';
import '@testing-library/jest-dom';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});