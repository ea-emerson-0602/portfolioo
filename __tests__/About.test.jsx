import About from "@/app/(site)/about/page";
import { render } from "@testing-library/react";
import { getProfile } from "@/sanity/sanity.query";



// Provide some mock profile data
const mockProfileData = [
  {
    _id: '1',
    shortBio: 'This is a short bio for testing.',
  },
];
  

  describe('About Component', () => {
    beforeEach(() => {
      getProfile(mockProfileData)
    });
    it('renders the About component with profile data on desktop view', async () => {
        render(<About />);
         (() => {
        // Check if the "About" title is rendered
        expect(screen.getAllByText('About')).toHaveLength(2);

        // Check if the short bio is rendered
        expect(screen.getByText('This is a short bio for testing.')).toBeInTheDocument();
      });
    })    

})

  it('renders the Skills component', async () => {
    render(<About />);
    (() => {

      expect(screen.getByText('Skills')).toBeInTheDocument();
    });
  });