import { BServer } from "../../../pages/backend";

export const returnAPI = {
    // developer
    createProfileDev: (props) => `${BServer}/${props.userRole}/profile/${props.query}`,
    viewProfileDev: (props) => `${BServer}/developer/profile/${props.userId}`,

    // agency developers
    createProfileDevByAgency: (props) => `${BServer}/${props.userRole}/profile/developer/${props.query}`,
    viewAgencyAllDeveloper: (props) => `${BServer}/agency/all-developers/${props.agencyId}`,
    viewAgencySingleDeveloper: (props) => `${BServer}/agency/developer/${props.userIdFromUseLocation}`,

    // inhouse developer
    createProfileDevInHouse: (props) => `${BServer}/${props.userRole}/inHouse-developer/profile/${props.query}`,
    getAllInHouseDeveloper: (props) => `${BServer}/admin/inHouse-developer/all?input=${props.input}`,
    getSingleInHouseDeveloper: (props) => `${BServer}/admin/inHouse-developer/single/${props.userIdFromUseLocation}`,

    // admin
    createProfileAdmin: (props) => `${BServer}/admin/profile/${props.query}`,
    viewProfileAdmin: (props) => `${BServer}/admin/profile/${props.userId}`,

    // job create and edit
    jobPost: (props) => `${BServer}/admin/job/create-job/${props.query}`,

    // viewAllJob
    viewAllJob: (props) => `${BServer}/admin/job/view-all-job?input=${props.input}&skills=${props.skills}&totalExperienceInYear=${props.totalExperienceInYear}&jobType=${props.jobType}&pageNumber=${props.pageNumber}&pageSize=${props.pageSize}`,
    // viewSingleJob
    viewSingleJob: (props) => `${BServer}/admin/job/view-single-job/${props._id}/${props.jobId}`,

    // view applied job
    viewAppliedJob: (props) => `${BServer}/view-applied-job/${props?._id}`,

    // delete single job
    deleteJob: (props) => `${BServer}/admin/job/visibility-job/${props.process}/${props?._id}`,

    // apply to a single job
    applyToSingleJob: (props) => `${BServer}/apply-to-single-job/${props?._id}/${props?.jobId}`,

    // applied member in a job

    appliedMemberSingleJob: (props) => `${BServer}/admin/job/get-applied-member-single-job/${props?._id}/${props?.jobId}/${props?.userRole}`,


    // form handle
    getFormDropdown: (props) => `${BServer}/admin/formHandle/getFormDropdown`,

    // get All Member Of Single userRole

    getAllMemberOfSingleRole: (props) => `${BServer}/admin/member/getAllMemberOfSingleRole/${props?.userRole}?input=${props?.input}&pageNumber=${props?.pageNumber}&pageSize=${props?.pageSize}`,

    // hire developer contact form
    contactForm: (props) => `${BServer}/not-protected/hire-developer-contact-form`,

    // client list
    getClientList: (props) => `${BServer}/admin/hire-developer/get-client-list?input=${props?.input}&pageNumber=${props?.pageNumber}&pageSize=${props?.pageSize}`,


    // toggle Status Agency And Developer

    toggleStatusAgencyAndDev: (props) => `${BServer}/admin/member/toggleStatusAgencyAndDev/${props?._id}/${props?.memberId}`,

    // toggle Status Admin
    toggleStatusAdmin: (props) => `${BServer}/admin/member/toggleStatusAdmin/${props?._id}/${props?.memberId}`,

    // toggle verification agency
    verifyAgencyToggle: (props) => `${BServer}/admin/member/verifyAgencyToggle/${props?._id}/${props?.memberId}`,

    // verification system
    sentOtpOnMobile: (props) => `${BServer}/verification/sent-otp-on-mobile`,
    verifyOtpFromMobile: (props) => `${BServer}/verification/verify-otp-on-mobile`,


    // landing page

    getAllresourceAction:()=>`${BServer}/common/getAllresource`,


}

